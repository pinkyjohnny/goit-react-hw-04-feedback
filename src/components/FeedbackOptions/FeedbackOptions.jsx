import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FeedbackList,
  FeedbackWrapper,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
