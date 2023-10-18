import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import TextQuestion from './TextQuestion';
import { asksText } from '../../questions';
import { groupBy } from 'lodash';
import { AssistWalker } from '@mui/icons-material';

const Questions = () => {
  const [values, setValues] = React.useState({
    sex: '',
    weight: '',
    height: '',
    age: '',
    activity: '',
    target: '',
    intensity: '',
    sleep: '',
  });

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {Object.entries(asksText).map(([key, value]) => (
        <TextQuestion ask={[value]} />
      ))}
    </>
  );
};

export default Questions;
