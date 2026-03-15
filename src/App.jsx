import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import QuizSelection from './pages/QuizSelection';
import Quiz from './pages/Quiz';
import Notes from './pages/Notes';
import Results from './pages/Results';

export default function App() {
  return (
    <Router>
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            日本語
          </Link>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/quiz-selection">Quizzes</Link></li>
              <li><Link to="/notes">Notes</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-selection" element={<QuizSelection />} />
        <Route path="/quiz/:type" element={<Quiz />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}
