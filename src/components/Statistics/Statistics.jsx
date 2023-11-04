import React from 'react';
import { StatisticsWrapper, StatsName } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
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
