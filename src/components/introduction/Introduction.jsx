import React from 'react';
import { useNavigate } from 'react-router-dom';

function Introduction() {
  const navigate = useNavigate();

  const startSurvey = () => {
    navigate('/question/1');
  };

  return (
    <div>
      <h1>Welcome to my questionnaire!</h1>
      <p>
        As part of my review of Digipharm.io, I have been asked to go through all sections and pages of the website to identify potential improvements and issues. 
        However, to ensure that my recommendations are aligned with the intended focus and goals of the website, I need your insights.
      </p>
      <p>
        This brief questionnaire aims to gather your perspective on the target audience, key areas of satisfaction, expectations for the landing page, and the main focus of Digipharm.io.
        Your feedback will be invaluable in helping me make informed suggestions. The form is submitted to me by email using 'Formspree'.
      </p>
      <button onClick={startSurvey}>Start Survey</button>
    </div>
  );
}

export default Introduction;