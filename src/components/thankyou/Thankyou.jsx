import React from 'react';
import { useNavigate } from 'react-router-dom';

  function ThankYou() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
      };
  return (
    <div>
      <h1>Thank You!</h1>
      <p>Your responses have been submitted successfully. Thank you so much for your time, I will now examine Digipharm.io with these answers in mind!</p>
      <button onClick = {goToHome}>Home</button>
    </div>
  );
}

export default ThankYou;
