import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export const fetchFeedback = async () => {
  try {
    const response = await api.get('feedback/');
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw error;
  }
};

export const postFeedback = async (message, feedbackType) => {
  try {
    const response = await api.post('feedback/', {
      message,
      feedback_type: feedbackType,
    });
    return response.data;
  } catch (error) {
    console.error('Error posting feedback:', error);
    throw error;
  }
};
