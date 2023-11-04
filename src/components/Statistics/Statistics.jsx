import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsWrapper, StatsName } from './Statistics.styled';

export const Statistics = ({ data, total, positiveFeedback }) => {
  const { good, neutral, bad } = data;
  return (
    <StatisticsWrapper>
      <ul>
        <li>
          <StatsName>Good: {good}</StatsName>
        </li>
        <li>
          <StatsName>Neutral: {neutral}</StatsName>
        </li>
        <li>
          <StatsName>Bad: {bad}</StatsName>
        </li>
        <li>
          <StatsName>Total: {total} </StatsName>
        </li>
        <li>
          <StatsName>Positive Feedback: {positiveFeedback}%</StatsName>
        </li>
      </ul>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
  }),
  total: PropTypes.func,
  positiveFeedback: PropTypes.func,
};
