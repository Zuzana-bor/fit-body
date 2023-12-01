import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Result from './Result';
import QuestionsForm from './QuestionsForm';
import { Container } from '@mui/material';
import { FormAnswers, initialFormAnswers } from '../../config';
import { getIsFilled } from './utils';

const Questions = () => {
  const [formAnswers, setformAnswers] =
    useState<FormAnswers>(initialFormAnswers);
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log(formAnswers);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setformAnswers((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setformAnswers((prev) => ({
      ...prev,
      [event.target.name]: parseInt(event.target.value) || 0,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const isFilled = getIsFilled(formAnswers);

  return (
    <Container maxWidth="sm" sx={{ mb: 10 }}>
      <Box pt={4}>
        {!isSubmitted ? (
          <>
            <QuestionsForm
              handleChange={handleChange}
              formAnswers={formAnswers}
              handleChangeNumber={handleChangeNumber}
            />

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
            <Result values={formAnswers} />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Questions;
