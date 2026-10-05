import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Box,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const questions = [
  [
    'What does the starting price include?',
    'Starting prices are a guide for each design. Your final quote depends on dimensions, materials, finish, hardware, and selected options. Share your preferences and I’ll confirm the price before your build.',
  ],
  [
    'Can I change the size, wood, or finish?',
    'Yes. Every piece is made to order. We can discuss custom dimensions, wood species, finishes, and the storage or seating details that suit your space.',
  ],
  [
    'Can you build something from my idea or inspiration?',
    'Absolutely. Custom builds are welcome, whether you have a sketch, inspiration photos, or just an idea. Share what you have in mind and we’ll plan a piece together, working through the design, dimensions, materials, and finish to suit your space.',
  ],
  [
    'How long does a build take?',
    'The current estimated lead time is approximately 3–4 weeks. Timing depends on the piece and workshop schedule, and will be confirmed with your quote.',
  ],
  [
    'Do you offer pickup or delivery?',
    'Pickup is available in the Poolville / Weatherford area. Delivery is available depending on location. Include your city or ZIP code when you inquire so we can discuss arrangements.',
  ],
  [
    'Can you build matching pieces?',
    'Yes. Matching pairs and coordinated furniture can be commissioned. Tell me which pieces you have in mind and we can plan the materials, proportions, and finishes together.',
  ],
];
export const FAQSection = () => (
  <Box component="section" id="faq" sx={{ py: { xs: 8, md: 10 } }}>
    <Container maxWidth="md">
      <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em' }}>
        Before we build
      </Typography>
      <Typography variant="h2" sx={{ mt: 2, mb: 4, fontSize: { xs: '2.5rem', md: '3rem' } }}>
        A few things you might be wondering.
      </Typography>
      {questions.map(([question, answer], i) => (
        <Accordion
          key={question}
          disableGutters
          elevation={0}
          sx={{
            bgcolor: 'transparent',
            borderBottom: '1px solid',
            borderColor: 'divider',
            '&:before': { display: 'none' },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id={`faq-${i}`}
            aria-controls={`faq-answer-${i}`}
          >
            <Typography sx={{ fontWeight: 600 }}>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ lineHeight: 1.8, color: 'text.secondary' }}>{answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);
