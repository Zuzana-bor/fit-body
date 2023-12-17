import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Result from './Result';
import QuestionsForm from './QuestionsForm';
import { Container } from '@mui/material';
import { initialFormAnswers } from '../../config';
import { getIsFilled } from './utils';
import { Create } from '@mui/icons-material';
import { Send } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import { AppContext } from '../../store/AppContext ';

const Questions = () => {
  const { formAnswers, setFormAnswers } = useContext(AppContext);
  const isFilled = getIsFilled(formAnswers);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(isFilled);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormAnswers((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormAnswers((prev) => ({
      ...prev,
      [event.target.name]: parseInt(event.target.value) || 0,
    }));
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormAnswers(initialFormAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <Box pt={4} pb={4}>
      {!isSubmitted ? (
        <Container maxWidth="sm" sx={{ mb: 10 }}>
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
        </Container>
      ) : (
        <Container sx={{ mb: 10 }}>
          <Result values={formAnswers} />
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<Create />}
              onClick={handleEdit}
            >
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
      )}
    </Box>
  );
};

export default Questions;
