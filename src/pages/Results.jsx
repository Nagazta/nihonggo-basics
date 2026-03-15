import { useLocation, useNavigate } from 'react-router-dom';

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || { score: 0, total: 10, type: 'hiragana' };

  const percentage = Math.round((state.score / state.total) * 100);

  return (
    <div className="results-container">
      <div className="results-card">
        <h2 className="results-title">クイズ完了！</h2>
        <p className="score-text">Quiz Complete!</p>

        <div className="score-display">{state.score}/{state.total}</div>

        <div className="score-text">
          You got {percentage}% correct!
        </div>

        <div className="encouragement">
          "Small steps lead to mastery."
        </div>

        <div className="button-group">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/quiz/${state.type}`)}
          >
            Retry Quiz
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
