import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  hiraganaQuiz,
  katakanaQuiz,
  numbersQuiz,
  multipleChoiceQuiz,
  vocabularyQuiz,
} from '../data/quizData';

export default function Quiz() {
  const { type } = useParams();
  const navigate = useNavigate();

  const quizData = {
    hiragana: hiraganaQuiz,
    katakana: katakanaQuiz,
    numbers: numbersQuiz,
    'multiple-choice': multipleChoiceQuiz,
    vocabulary: vocabularyQuiz,
  };

  const questions = quizData[type] || [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [answered, setAnswered] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const question = questions[currentQuestion];
  const isMultipleChoice = type === 'multiple-choice';
  const inputLabel = type === 'vocabulary' ? 'Enter the hiragana:' : 'Enter the romaji:';
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = () => {
    if (!answer.trim() && !isMultipleChoice) {
      setFeedback('Please enter an answer');
      return;
    }

    const isCorrect = isMultipleChoice
      ? selectedChoice === question.correct
      : answer.toLowerCase().trim() === question.correct.toLowerCase();

    if (isCorrect) {
      setScore(score + 1);
      setFeedback('Correct! 正解です！');
    } else {
      const expected = isMultipleChoice
        ? question.correct
        : question.romaji || question.correct;
      setFeedback(`Incorrect. The answer was: ${expected}`);
    }

    setAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer('');
      setFeedback('');
      setAnswered(false);
      setSelectedChoice(null);
    } else {
      navigate('/results', { state: { score, total: questions.length, type } });
    }
  };

  if (!question) {
    return <div className="quiz-container">Loading...</div>;
  }

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="quiz-content">
        <div className="question-counter">
          Question {currentQuestion + 1} of {questions.length}
        </div>

        {isMultipleChoice ? (
          <>
            <p className="question-text">{question.question}</p>
            <div className="multiple-choice">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  className={`choice-button ${
                    selectedChoice === option ? 'selected' : ''
                  }`}
                  onClick={() => !answered && setSelectedChoice(option)}
                  disabled={answered}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="question-text">{inputLabel}</p>
            <div className="large-character">
              {type === 'vocabulary' ? question.english : (question.character || question.japanese || question.hiragana)}
            </div>
            <input
              type="text"
              className="input-field"
              placeholder="Type your answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !answered) {
                  handleAnswer();
                }
              }}
              disabled={answered}
            />
          </>
        )}

        {feedback && (
          <div className={`feedback ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>
            {feedback}
          </div>
        )}
      </div>

      <div className="button-group">
        {!answered ? (
          <button className="btn btn-primary" onClick={handleAnswer}>
            Submit
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleNext}>
            {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
          </button>
        )}
      </div>
    </div>
  );
}
