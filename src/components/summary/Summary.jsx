import React from 'react';
import { useNavigate } from 'react-router-dom';

function Summary({ answers, questions }) {
  const navigate = useNavigate();

  const handleEdit = (questionId) => {
    navigate(`/question/${questionId}`);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(answers).forEach(key => {
      formData.append(`question-${key}`, answers[key].answer);
      formData.append(`furtherInfo-${key}`, answers[key].furtherInfo);
    });

    try {
      const response = await fetch('https://formspree.io/f/mvoejowk', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form.');
    }
  };

  return (
    <div>
      <h2>Summary</h2>
      <form onSubmit={handleFormSubmit}>
        {questions.map(question => (
          <div key={question.id}>
            <h3>{question.text}</h3>
            <p>Answer: {answers[question.id]?.answer}</p>
            <p>Further Information: {answers[question.id]?.furtherInfo}</p>
            <button type="button" onClick={() => handleEdit(question.id)}>Change</button>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Summary;
