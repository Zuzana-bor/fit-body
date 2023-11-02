import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MyMenu from './layout/TopMenu';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from 'react-router-dom';
import Plans from './pages/plans/MenuPlans';
import Questions from './pages/questions/Questions';
import Exercise from './pages/exercise/Exercise';
import Home from './pages/home/Home';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Urls, TrainingUrls } from './config';

import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

import UpperBody from './pages/plans/splitPlans/UpperBody';
import FullBody from './pages/plans/splitPlans/FullBody';
import LowerBody from './pages/plans/splitPlans/LowerBody';
import Cardio from './pages/plans/splitPlans/Cardio';

const theme = createTheme({
  palette: {
    primary: {
      main: green[300],
    },
  },
});
function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <MyMenu />

        <Container>
          <Routes>
            <Route path={Urls.Plans} element={<Plans />} />
            <Route path={Urls.Questions} element={<Questions />} />
            <Route path={Urls.Exercise} element={<Exercise />} />
            <Route path={Urls.Home} element={<Home />} theme={theme} />

            <Route path={TrainingUrls.FullBody} element={<FullBody />} />
            <Route path={TrainingUrls.UpperBody} element={<UpperBody />} />
            <Route path={TrainingUrls.LowerBody} element={<LowerBody />} />
            <Route path={TrainingUrls.Cardio} element={<Cardio />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
