import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Alert,
  Box,
  Button,
  Container,
  Fade,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  company: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
  company: '',
};

export const ContactSection = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleInterestChange = (value: string) => {
    setFormValues((prev) => ({
      ...prev,
      interest: value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (formValues.company) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formValues.name,
          from_email: formValues.email,
          phone: formValues.phone,
          project_type: formValues.interest,
          message: formValues.message,
          to_email: 'john@frontlinecrafted.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setIsSuccess(true);
      setFormValues(initialValues);
    } catch {
      setErrorMessage('Something went wrong while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setIsSuccess(false);
    setErrorMessage('');
    setFormValues(initialValues);
  };

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 10, md: 12 } }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Typography variant="h3">Contact Frontline Crafted</Typography>

          <Typography variant="body1" color="text.secondary">
            Have a custom project in mind or interested in one of our pieces? Send us a message.
          </Typography>

          <Stack direction="row" spacing={1}>
            <Tooltip title="Email">
              <IconButton component="a" href="mailto:john@frontlinecrafted.com" color="primary">
                <EmailOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Service Area">
              <IconButton
                component="a"
                href="https://www.google.com/maps?q=Weatherford,+TX"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <LocationOnOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Facebook">
              <IconButton
                component="a"
                href="https://www.facebook.com/frontlinecrafted"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <FacebookIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Instagram">
              <IconButton
                component="a"
                href="https://www.instagram.com/frontlinecrafted"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
          </Stack>

          <Box
            sx={(theme) => ({
              backgroundColor: theme.palette.background.paper,
              borderRadius: 3,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: theme.shadows[2],
            })}
          >
            <Box
              component="iframe"
              title="Frontline Crafted service area map"
              src="https://www.google.com/maps?q=Weatherford,+TX&z=10&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                width: '100%',
                height: { xs: 280, md: 340 },
                border: 0,
                display: 'block',
              }}
            />

            <Box sx={{ p: 2.5 }}>
              <Typography variant="h6" sx={{ mb: 0.5 }}>
                Proudly serving Weatherford and surrounding areas
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Custom woodworking for Weatherford, Aledo, Fort Worth, Hudson Oaks, Willow Park,
                Springtown, Azle, and nearby communities.
              </Typography>
            </Box>
          </Box>

          <Fade in timeout={400}>
            <Box
              sx={(theme) => ({
                backgroundColor: theme.palette.background.paper,
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: theme.shadows[2],
              })}
            >
              {isSuccess ? (
                <Stack spacing={2} alignItems="center">
                  <Typography variant="h5">Thank you. Your inquiry has been sent.</Typography>

                  <Typography variant="body1" color="text.secondary" textAlign="center">
                    We will review your project details and get back to you soon.
                  </Typography>

                  <Button variant="outlined" onClick={handleSendAnother}>
                    Send Another Inquiry
                  </Button>
                </Stack>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}

                    <TextField
                      label="Name"
                      value={formValues.name}
                      onChange={handleChange('name')}
                      fullWidth
                      required
                    />

                    <TextField
                      label="Email"
                      type="email"
                      value={formValues.email}
                      onChange={handleChange('email')}
                      fullWidth
                      required
                    />

                    <TextField
                      label="Phone"
                      value={formValues.phone}
                      onChange={handleChange('phone')}
                      fullWidth
                    />

                    <FormControl fullWidth required>
                      <InputLabel id="interest-label">What are you interested in?</InputLabel>

                      <Select
                        labelId="interest-label"
                        value={formValues.interest}
                        label="What are you interested in?"
                        onChange={(event) => handleInterestChange(event.target.value)}
                      >
                        <MenuItem value="" disabled>
                          <em>Select a category</em>
                        </MenuItem>
                        <MenuItem value="Outdoor Furniture">Outdoor Furniture</MenuItem>
                        <MenuItem value="Planters">Planters</MenuItem>
                        <MenuItem value="Home Decor">Home Decor</MenuItem>
                        <MenuItem value="Custom Furniture">Custom Furniture</MenuItem>
                        <MenuItem value="Custom Build">Custom Build</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      label="Project Details"
                      value={formValues.message}
                      onChange={handleChange('message')}
                      fullWidth
                      required
                      multiline
                      minRows={5}
                    />

                    <Box
                      component="input"
                      type="text"
                      name="company"
                      value={formValues.company}
                      onChange={handleChange('company')}
                      autoComplete="off"
                      tabIndex={-1}
                      sx={{ display: 'none' }}
                    />

                    <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </Button>
                  </Stack>
                </Box>
              )}
            </Box>
          </Fade>
        </Stack>
      </Container>
    </Box>
  );
};
