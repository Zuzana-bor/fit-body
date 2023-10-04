import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Menu from './Menu/Menu';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/tranings">Trainings</Route>
        <Route path="/exercises">Exercises</Route>
        <Route path="/form">Form</Route>
        <Route path="/">Home</Route>
      </Routes>{' '}
    </Router>
  );
}

export default App;
