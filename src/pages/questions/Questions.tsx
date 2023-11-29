import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Result from './Result';
import QuestionsForm from './QuestionsForm';
import { Container } from '@mui/material';
import { Typevalues } from '../../config';

const Questions = () => {
  const [values, setValues] = React.useState<Typevalues>({
    weight: 0,
    height: 0,
    age: 0,
    activity: '',
    target: '',
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const isFilled = Object.values(values).length === 8;

  return (
    <Container maxWidth="sm" sx={{ mb: 10 }}>
      <Box pt={4}>
        {!isSubmitted ? (
          <>
            <QuestionsForm handleChange={handleChange} />

            <Button
              variant="contained"
              disabled={!isFilled}
              onClick={handleSubmit}
              size="large"
            >
              Odeslat
            </Button>
          </>
        ) : (
          <Box>
            <Result values={values} />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Questions;
