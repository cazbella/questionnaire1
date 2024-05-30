import React from 'react';

function Question({ question, answer, furtherInfo, onAnswerChange, onNext, onPrevious, isLast, onSubmit }) {
  const handleAnswerChange = (e) => {
    onAnswerChange(question.id, e.target.value, furtherInfo);
  };

  const handleFurtherInfoChange = (e) => {
    onAnswerChange(question.id, answer, e.target.value);
  };

  return (
    <div>
      <h2>Question {question.id}</h2>
      <p>{question.text}</p>
      {question.options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={answer === option}
              onChange={handleAnswerChange}
            />
            {option}
          </label>
        </div>
      ))}
      <div className="further-information">
        <label>
          Further Information:
          <br />
          <textarea
            className="further-info-textarea"
            value={furtherInfo}
            onChange={handleFurtherInfoChange}
          />
        </label>
      </div>
      <div>
        {question.id > 1 && <button onClick={onPrevious}>Previous</button>}
        {isLast ? (
          <button onClick={onSubmit}>Submit</button>
        ) : (
          <button onClick={onNext}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Question;
