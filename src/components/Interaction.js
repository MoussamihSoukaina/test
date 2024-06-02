import React, { useState } from 'react';
import { postFeedback } from '../services/api';
import './Interaction.css';

const Interaction = () => {
  const [message, setMessage] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await postFeedback('Vous avez cliqué sur le bouton!', 'success');
      setMessage('Vous avez cliqué sur le bouton!');
      setFeedbackMessage('Feedback envoyé avec succès!');
    } catch (error) {
      setFeedbackMessage('Erreur lors de l\'envoi du feedback.');
    }
  };

  return (
    <div className="interaction">
      <button className="interaction-button" onClick={handleClick}>Cliquez-moi</button>
      {message && <p className="interaction-message">{message}</p>}
      {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
    </div>
  );
};

export default Interaction;
