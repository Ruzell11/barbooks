import { Routes, Route, Navigate } from 'react-router-dom';
import GameDetails from './components/game-details';
import HomePage from './components/home-page';

function App() {
  return (
    <Routes>
      {/* Redirect root (/) to /game */}
      <Route path="/" element={<Navigate to="/game" replace />} />
      <Route path="/game" element={<HomePage />} />
      <Route path="/game/:id" element={<GameDetails />} />
    </Routes>
  );
}

export default App;
