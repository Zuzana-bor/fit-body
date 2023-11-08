import CssBaseline from '@mui/material/CssBaseline';
import TopMenu from './layout/TopMenu';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Plans from './pages/plans/Plans';
import Questions from './pages/questions/Questions';
import Exercise from './pages/exercise/Exercise';
import Home from './pages/home/Home';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Urls } from './config';
import { Stack } from '@mui/material';
import { Box } from '@material-ui/core';
import Footer from './layout/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: green[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <CssBaseline />

          <TopMenu />

          <Box flexGrow={1}>
            <Routes>
              <Route path={Urls.Plans} element={<Plans />} />
              <Route path={Urls.Questions} element={<Questions />} />
              <Route path={Urls.Exercise} element={<Exercise />} />
              <Route path={Urls.Home} element={<Home />} theme={theme} />
            </Routes>
          </Box>
        </BrowserRouter>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
