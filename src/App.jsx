import React, { useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Question from './components/question/Question';
import Summary from './components/summary/Summary';
import Introduction from './components/introduction/Introduction';
import ThankYou from './components/thankyou/Thankyou';

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
  },
  {
    id: 5,
    text: 'What are the main pain points or frustrations users experience when interacting with Digipharm.io?',
    options: ['Navigation issues', 'Content clarity', 'Performance issues', 'Other (please specify)']
  },
  {
    id: 6,
    text: 'Are there any specific areas of the website that receive frequent complaints or negative feedback?',
    options: ['Homepage', 'Solutions/Services pages', 'About Us', 'Other (please specify)']
  },
  {
    id: 7,
    text: 'How does Digipharm.io compare to competitor websites in terms of design, functionality, and user experience?',
    options: ['Better', 'Comparable', 'Worse', 'Other (please specify)']
  },
  {
    id: 8,
    text: 'Are there any features or elements on competitor websites that you think we should consider implementing?',
    options: ['Yes', 'No', 'Not Sure']
  },
  {
    id: 9,
    text: 'What are the key conversion metrics we track on Digipharm.io (e.g., lead generation, contact form submissions)?',
    options: ['Lead generation', 'Contact form submissions', 'Newsletter sign-ups', 'Other (please specify)']
  },
  {
    id: 10,
    text: 'Are there any pages or elements of the website that significantly contribute to conversion, or conversely, hinder it?',
    options: ['Homepage', 'Solutions/Services pages', 'About Us', 'Other (please specify)']
  },
  {
    id: 11,
    text: 'Can you walk me through the typical user journey on Digipharm.io, from landing on the homepage to taking action?',
    options: ['Yes', 'No', 'Partially']
  },
  {
    id: 12,
    text: 'Are there any bottlenecks or points of drop-off in the user journey that need to be addressed?',
    options: ['Yes', 'No', 'Not Sure']
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
        <Route path="/" element={<Introduction />} />
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
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
