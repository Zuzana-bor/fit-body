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
import { Stack, Box, responsiveFontSizes } from '@mui/material';
import Footer from './layout/Footer';
import { AppContextProvider } from './store/AppContextProvider';
import ScrollToHashElement from './layout/ScrollToHashElement';
import Profile from './pages/Profile';

let theme = createTheme({
  palette: {
    primary: {
      main: green[300],
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <BrowserRouter>
          <ScrollToHashElement />
          <Stack sx={{ minHeight: '100vh' }}>
            <CssBaseline />
            <TopMenu />
            <Box flexGrow={1}>
              <Routes>
                <Route path={Urls.Plans} element={<Plans />} />
                <Route path={Urls.Questions} element={<Questions />} />
                <Route path={Urls.Exercise} element={<Exercise />} />
                <Route path={Urls.Home} element={<Home />} />
                <Route path={Urls.Profile} element={<Profile />} />
              </Routes>
            </Box>
            <Footer />
          </Stack>
        </BrowserRouter>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
