import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from '@mui/material';
import { AppContext } from '../store/AppContext ';

type LoginFormProps = {
  open: boolean;
  onClose: () => void;
};

const RegistrationForm: React.FC<LoginFormProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { registration } = React.useContext(AppContext);

  const handleLogin = () => {
    registration(email, password);
    console.log('reg con in with:', email, password, name);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            label="DisplayName"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Registrovat
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationForm;
