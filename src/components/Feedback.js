import React, { useEffect, useState } from 'react';
import { fetchFeedback } from '../services/api';
import './Feedback.css';

const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const getFeedback = async () => {
      try {
        const data = await fetchFeedback();
        setFeedbackList(data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    getFeedback();
  }, []);

  return (
    <div className="feedback">
      <h2>Feedback</h2>
      {feedbackList.map((feedback) => (
        <div key={feedback.id} className={`feedback-item ${feedback.feedback_type}`}>
          <p>{feedback.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
