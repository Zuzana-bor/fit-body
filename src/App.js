import './App.css';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MyMenu from './component/MyMenu';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Plans from './component/Plans';
import Form from './component/Form';
import Exercise from './component/Exercise';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <MyMenu />
      <Container>
        <Routes>
          <Route path="/Plans" element={<Plans />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Exercise" element={<Exercise />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
