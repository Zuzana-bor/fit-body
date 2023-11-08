import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Result from './Result';
import QuestionsForm from './QuestionsForm';
import { Container } from '@mui/material';

const Questions = () => {
  const [values, setValues] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const isFilled = Object.values(values).length === 8;

  console.log(values);
  return (
    <>
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
    </>
  );
};

export default Questions;
