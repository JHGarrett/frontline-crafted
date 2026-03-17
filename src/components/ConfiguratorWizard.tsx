import { useMemo, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';
import { CONFIGURABLE_PRODUCTS, type ConfiguratorFormValues } from '../types/configuratorProducts';
import { calculateCedarPlanterEstimate } from '../lib/configurator/calculateCedarPlanterEstimate';
import emailjs from '@emailjs/browser';

const STEP_LABELS = ['Product', 'Length', 'Depth', 'Height', 'Estimate', 'Contact'];

const INITIAL_VALUES: ConfiguratorFormValues = {
  productType: null,
  width: '',
  depth: '',
  planterHeight: '15',
  name: '',
  email: '',
  phone: '',
  notes: '',
};

const getLengthError = (value: string) => {
  if (!value.trim()) return 'Enter a length.';
  const numericValue = Number(value);

  if (Number.isNaN(numericValue) || numericValue <= 0) {
    return 'Length must be greater than 0.';
  }

  if (numericValue > 96) {
    return 'This estimator currently supports lengths up to 96 inches.';
  }

  return '';
};

const getDepthError = (value: string) => {
  if (!value.trim()) return 'Enter a depth.';
  const numericValue = Number(value);

  if (Number.isNaN(numericValue) || numericValue <= 0) {
    return 'Depth must be greater than 0.';
  }

  if (numericValue > 96) {
    return 'This estimator currently supports depths up to 96 inches.';
  }

  return '';
};

const getPlanterHeightError = (value: string) => {
  if (!value.trim()) return 'Enter a planter height.';
  const numericValue = Number(value);

  if (Number.isNaN(numericValue) || numericValue <= 0) {
    return 'Planter height must be greater than 0.';
  }

  return '';
};

const getNameError = (value: string) => {
  if (!value.trim()) return 'Enter your name.';
  return '';
};

const getEmailError = (value: string) => {
  if (!value.trim()) return 'Enter your email.';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value.trim())) {
    return 'Enter a valid email address.';
  }

  return '';
};

export const ConfiguratorWizard = () => {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<ConfiguratorFormValues>(INITIAL_VALUES);
  const [showStepErrors, setShowStepErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleRequestBuild = async () => {
    if (!estimate || !selectedProduct) return;

    setIsSubmitting(true);
    setSubmitSuccess('');
    setSubmitError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          submission_type: 'Configurator Build Request',
          from_name: values.name,
          from_email: values.email,
          name: values.name,
          email: values.email,
          phone: values.phone || 'Not provided',
          project_type: selectedProduct.label,
          message: values.notes || 'No additional notes provided.',
          product_name: selectedProduct.label,
          planter_length: values.width,
          planter_depth: values.depth,
          planter_height: values.planterHeight,
          estimated_price: estimate.finalEstimate,
          legs_included: 'Yes',
          leg_height_note: 'Final leg height will be discussed after the build is requested.',
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setSubmitSuccess('Thanks! Your build request was sent successfully.');
    } catch {
      setSubmitError('Something went wrong while sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nameError = useMemo(() => getNameError(values.name), [values.name]);
  const emailError = useMemo(() => getEmailError(values.email), [values.email]);

  const selectedProduct = useMemo(
    () => CONFIGURABLE_PRODUCTS.find((product) => product.id === values.productType) ?? null,
    [values.productType],
  );

  const lengthError = useMemo(() => getLengthError(values.width), [values.width]);
  const depthError = useMemo(() => getDepthError(values.depth), [values.depth]);
  const planterHeightError = useMemo(
    () => getPlanterHeightError(values.planterHeight),
    [values.planterHeight],
  );

  const estimate = useMemo(() => {
    const width = Number(values.width);
    const depth = Number(values.depth);
    const planterHeight = Number(values.planterHeight);

    if (!width || !depth || !planterHeight) return null;
    if (lengthError || depthError || planterHeightError) return null;

    try {
      return calculateCedarPlanterEstimate({
        width,
        depth,
        planterHeight,
      });
    } catch {
      return null;
    }
  }, [values, lengthError, depthError, planterHeightError]);

  const canContinue = (() => {
    if (step === 0) return values.productType !== null;
    if (step === 1) return !lengthError;
    if (step === 2) return !depthError;
    if (step === 3) return !planterHeightError;
    if (step === 4) return true;
    if (step === 5) return !nameError && !emailError;
    return true;
  })();

  const nextStep = () => {
    if (!canContinue) {
      setShowStepErrors(true);
      return;
    }

    setShowStepErrors(false);
    setStep((currentStep) => currentStep + 1);
  };

  const prevStep = () => {
    setShowStepErrors(false);
    setStep((currentStep) => Math.max(currentStep - 1, 0));
  };

  const updateValue = <K extends keyof ConfiguratorFormValues>(
    key: K,
    value: ConfiguratorFormValues[K],
  ) => {
    setValues((currentValues) => ({
      ...currentValues,
      [key]: value,
    }));
  };

  const handleStepKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter') return;

    event.preventDefault();
    nextStep();
  };

  const showLengthError = step === 1 && showStepErrors && Boolean(lengthError);
  const showDepthError = step === 2 && showStepErrors && Boolean(depthError);
  const showPlanterHeightError = step === 3 && showStepErrors && Boolean(planterHeightError);
  const showNameError = step === 5 && showStepErrors && Boolean(nameError);
  const showEmailError = step === 5 && showStepErrors && Boolean(emailError);

  return (
    <Box>
      <Stepper activeStep={step} sx={{ mb: 4 }}>
        {STEP_LABELS.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {step === 0 && (
        <Stack spacing={3} onKeyDown={handleStepKeyDown}>
          <Box>
            <Typography variant="h5">What would you like to build?</Typography>

            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              Start by choosing a product type.
            </Typography>
          </Box>

          <Stack spacing={2}>
            {CONFIGURABLE_PRODUCTS.map((product) => {
              const isSelected = values.productType === product.id;

              return (
                <Button
                  key={product.id}
                  variant={isSelected ? 'contained' : 'outlined'}
                  onClick={() => updateValue('productType', product.id)}
                  sx={{
                    justifyContent: 'flex-start',
                    py: 1.5,
                  }}
                >
                  {product.label}
                </Button>
              );
            })}
          </Stack>

          <Box>
            <Button variant="contained" onClick={nextStep}>
              Continue
            </Button>
          </Box>
        </Stack>
      )}

      {step === 1 && (
        <Stack spacing={3} onKeyDown={handleStepKeyDown}>
          <Box>
            <Typography variant="h5">How long should the planter be?</Typography>

            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              Enter the interior length from left to right in inches.
            </Typography>
          </Box>

          <TextField
            autoFocus
            label="Length"
            type="number"
            helperText={showLengthError ? lengthError : 'Interior length (left to right) in inches'}
            error={showLengthError}
            value={values.width}
            onChange={(event) => updateValue('width', event.target.value)}
            inputProps={{ min: 1, max: 96 }}
            fullWidth
          />

          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={prevStep}>
              Back
            </Button>

            <Button variant="contained" onClick={nextStep}>
              Continue
            </Button>
          </Stack>
        </Stack>
      )}

      {step === 2 && (
        <Stack spacing={3} onKeyDown={handleStepKeyDown}>
          <Box>
            <Typography variant="h5">How deep should the planter be?</Typography>

            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              Enter the interior depth from front to back in inches.
            </Typography>
          </Box>

          <TextField
            autoFocus
            label="Depth (front to back)"
            type="number"
            helperText={showDepthError ? depthError : 'Interior depth from front to back in inches'}
            error={showDepthError}
            value={values.depth}
            onChange={(event) => updateValue('depth', event.target.value)}
            inputProps={{ min: 1, max: 96 }}
            fullWidth
          />

          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={prevStep}>
              Back
            </Button>

            <Button variant="contained" onClick={nextStep}>
              Continue
            </Button>
          </Stack>
        </Stack>
      )}

      {step === 3 && (
        <Stack spacing={3} onKeyDown={handleStepKeyDown}>
          <Box>
            <Typography variant="h5">How tall should the planter box be?</Typography>

            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              Enter the planter box height only, not including the legs.
            </Typography>

            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              15 inches is the standard planter box height.
            </Typography>
          </Box>

          <TextField
            autoFocus
            label="Planter Height"
            type="number"
            helperText={
              showPlanterHeightError ? planterHeightError : 'Planter box height in inches'
            }
            error={showPlanterHeightError}
            value={values.planterHeight}
            onChange={(event) => updateValue('planterHeight', event.target.value)}
            inputProps={{ min: 1 }}
            fullWidth
          />

          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={prevStep}>
              Back
            </Button>

            <Button variant="contained" onClick={nextStep}>
              Continue
            </Button>
          </Stack>
        </Stack>
      )}

      {step === 4 && (
        <Stack spacing={3}>
          <Typography variant="h5">Estimated Build Price</Typography>

          {estimate ? (
            <>
              <Typography variant="body2" color="text.secondary">
                This is a rough estimate based on the dimensions provided. Final pricing may vary
                slightly depending on the final build details.
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Legs are included in this price. Final leg height will be discussed after you
                request the build.
              </Typography>

              <Stack spacing={1}>
                <Typography>Product: {selectedProduct?.label}</Typography>
                <Typography>Length: {values.width} in</Typography>
                <Typography>Depth: {values.depth} in</Typography>
                <Typography>Planter Height: {values.planterHeight} in</Typography>
              </Stack>

              <Typography variant="h3" sx={{ mt: 2 }}>
                ${estimate.finalEstimate}
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={prevStep}>
                  Back
                </Button>
                <Button variant="contained" onClick={nextStep}>
                  Continue
                </Button>{' '}
              </Stack>
            </>
          ) : (
            <>
              <Typography variant="body2" color="text.secondary">
                Those dimensions are outside the range currently supported by this estimator. Please
                go back and adjust the size.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={prevStep}>
                  Back
                </Button>
              </Stack>
            </>
          )}
        </Stack>
      )}
      {step === 5 && (
        <Stack spacing={3} onKeyDown={handleStepKeyDown}>
          <Box>
            <Typography variant="h5">Request This Build</Typography>

            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              Enter your contact details and anything you'd like me to know about the build.
            </Typography>
          </Box>

          <TextField
            autoFocus
            label="Name"
            value={values.name}
            onChange={(event) => updateValue('name', event.target.value)}
            error={showNameError}
            helperText={showNameError ? nameError : ''}
            fullWidth
          />

          <TextField
            label="Email"
            type="email"
            value={values.email}
            onChange={(event) => updateValue('email', event.target.value)}
            error={showEmailError}
            helperText={showEmailError ? emailError : ''}
            fullWidth
          />

          <TextField
            label="Phone (optional)"
            value={values.phone}
            onChange={(event) => updateValue('phone', event.target.value)}
            fullWidth
          />

          <TextField
            label="Notes"
            value={values.notes}
            onChange={(event) => updateValue('notes', event.target.value)}
            multiline
            minRows={4}
            fullWidth
          />

          {submitSuccess && <Alert severity="success">{submitSuccess}</Alert>}
          {submitError && <Alert severity="error">{submitError}</Alert>}

          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={prevStep} disabled={isSubmitting}>
              Back
            </Button>

            <Button variant="contained" onClick={handleRequestBuild} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Request'}
            </Button>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};
