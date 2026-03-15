import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <div className="hero-character">日</div>
        <h1>Learn Nihongo the Simple Way</h1>
        <p className="home-subtitle">
          Master Japanese characters and numbers through short quizzes
        </p>
        <button
          className="cta-button"
          onClick={() => navigate('/quiz-selection')}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
