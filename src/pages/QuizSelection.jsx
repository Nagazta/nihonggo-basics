import { Link } from 'react-router-dom';

const quizzes = [
  {
    id: 'hiragana',
    icon: 'あ',
    title: 'Hiragana Quiz',
    description: 'Learn basic Hiragana characters and their pronunciations',
  },
  {
    id: 'katakana',
    icon: 'ア',
    title: 'Katakana Quiz',
    description: 'Master Katakana characters used for foreign words',
  },
  {
    id: 'multiple-choice',
    icon: '✓',
    title: 'Multiple Choice',
    description: 'Test your knowledge with multiple choice questions',
  },
  {
    id: 'numbers',
    icon: '1',
    title: 'Numbers Quiz',
    description: 'Learn Japanese numbers from 1 to 10',
  },
  {
    id: 'vocabulary',
    icon: '📚',
    title: 'Vocabulary Quiz',
    description: 'Practice typing English meanings for Japanese words',
  },
];

export default function QuizSelection() {
  return (
    <div className="quiz-selection">
      <div className="container">
        <h2>Select a Quiz</h2>
        <div className="quiz-grid">
          {quizzes.map((quiz) => (
            <Link
              key={quiz.id}
              to={`/quiz/${quiz.id}`}
              className="quiz-card"
            >
              <div className="quiz-card-icon">{quiz.icon}</div>
              <h3>{quiz.title}</h3>
              <p>{quiz.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
