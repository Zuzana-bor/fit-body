import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Result from './Result';
import QuestionsForm from './QuestionsForm';
import { Container } from '@mui/material';
import { FormAnswers, initialFormAnswers } from '../../config';
import { getIsFilled } from './utils';
import { Create } from '@mui/icons-material';
import { Send } from '@mui/icons-material';
import Stack from '@mui/material/Stack';

const Questions = () => {
  const [formAnswers, setformAnswers] =
    useState<FormAnswers>(initialFormAnswers);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setformAnswers(initialFormAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const isFilled = getIsFilled(formAnswers);

  return (
    <Container maxWidth="sm" sx={{ mb: 10 }}>
      <Box pt={4} pb={4}>
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
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<Create />} onClick={handleEdit}>
          Upravit hodnoty
        </Button>
        <Button
          variant="outlined"
          startIcon={<Send />}
          color="secondary"
          onClick={handleReset}
        >
          Vyplnit znovu
        </Button>
      </Stack>
    </Container>
  );
};

export default Questions;
