import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Business } from './partner-page';

export function View() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Business />} />
      </Routes>
    </Router>
  );
}
