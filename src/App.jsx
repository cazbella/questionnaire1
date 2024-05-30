import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import Question from './components/question/Question';
import Summary from './components/summary/Summary';

const questions = [
  {
    id: 1,
    text: 'Is the content on Digipharm.io primarily aimed at:',
    options: ['Patients', 'Potential business customers (e.g., healthcare professionals, pharmaceutical companies)', 'Both', 'Other (please specify)']
  },
  {
    id: 2,
    text: 'Which pages on Digipharm.io are you currently most satisfied with, and why?',
    options: ['Homepage', 'Solutions/Services pages', 'About Us', 'Other (please specify)']
  },
  {
    id: 3,
    text: 'What are the main expectations or desires users have when they land on Digipharm.io\'s homepage?',
    options: ['Clear information about Digipharm\'s solutions/services', 'Easy navigation to key sections/pages', 'Compelling call-to-action for further engagement', 'Other (please specify)']
  },
  {
    id: 4,
    text: 'In your opinion, what is the primary focus of Digipharm.io?',
    options: ['Showcasing Digipharm\'s solutions/services to potential business customers', 'Providing information and resources for patients', 'Both', 'Other (please specify)']
  }
];

function App() {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswerChange = (questionId, answer, furtherInfo) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: { answer, furtherInfo }
    }));
  };

  const handleSubmit = () => {
    navigate('/summary');
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/question/1" replace />} />
        {questions.map((question, index) => (
          <Route
            key={question.id}
            path={`/question/${index + 1}`}
            element={
              <Question
                question={question}
                answer={answers[question.id]?.answer || ''}
                furtherInfo={answers[question.id]?.furtherInfo || ''}
                onAnswerChange={handleAnswerChange}
                onNext={() => navigate(`/question/${index + 2}`)}
                onPrevious={() => navigate(`/question/${index}`)}
                isLast={index === questions.length - 1}
                onSubmit={handleSubmit}
              />
            }
          />
        ))}
        <Route path="/summary" element={<Summary answers={answers} questions={questions} />} />
      </Routes>
    </div>
  );
}

export default App;
