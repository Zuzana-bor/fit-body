import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from '@mui/material';
import { AppContext } from '../store/AppContext ';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

type LoginFormProps = {
  open: boolean;
  onClose: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, signByGoogle, signByFB, setSign } =
    React.useContext(AppContext);

  const handleLogin = () => {
    signIn(email, password);
    console.log('Logging in with:', email, password);
    setSign(true);
    onClose();
  };

  const handleLoginByGoogle = () => {
    signByGoogle();
  };

  const handleLoginByFB = () => {
    signByFB();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <form>
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
            Přihlásit
          </Button>
          <Button onClick={handleLoginByGoogle}>
            <GoogleIcon fontSize="large" />
          </Button>
          <Button onClick={handleLoginByFB}>
            <FacebookIcon fontSize="large" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
