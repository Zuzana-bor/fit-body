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
import Questions from './pages/questions/Questions';
import Exercise from './pages/exercise/Exercise';
import Home from './component/Home';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Urls } from './config';
import Plan from './pages/plans/Plan';

const theme = createTheme({
  palette: {
    primary: {
      main: green[300],
    },
  },
});

// function App() {
//   return <ThemeProvider theme={theme}>...</ThemeProvider>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <MyMenu />

        <Container>
          <Routes>
            <Route path={Urls.Plans} element={<Plans />} />
            <Route path={Urls.Questions} element={<Questions />} />
            <Route path={Urls.Exercise} element={<Exercise />} />
            <Route path={Urls.Home} element={<Home />} theme={theme} />
          </Routes>
        </Container>
        <Container>
          <Routes>
            <Route path="/plans/:category" element={<Plan />} />
          </Routes>
        </Container>
      </BrowserRouter>{' '}
    </ThemeProvider>
  );
}

export default App;
