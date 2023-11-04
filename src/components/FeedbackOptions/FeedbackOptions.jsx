import React from 'react';
import {
  Button,
  FeedbackList,
  FeedbackWrapper,
} from './FeedbackOptions.styled';

export const FeetbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrapper>
      <FeedbackList>
        {options.map(option => (
          <li key={option}>
            <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
          </li>
        ))}
      </FeedbackList>
    </FeedbackWrapper>
  );
};
