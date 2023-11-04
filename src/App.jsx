import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import { Notification } from 'components/Notification/Notification.jsx';
import { Section } from 'components/Section/Section.jsx';
import React, { useState } from 'react';

export const App = () => {
  const [formState, setFormState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = selectedOption => {
    setFormState(prev => ({
      ...prev,
      [selectedOption]: prev[selectedOption] + 1,
    }));
  };

  const totalPositivePercentage = () => {
    return countTotalFeedback === 0
      ? 0
      : Math.ceil((formState.good / countTotalFeedback()) * 100);
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = formState;
    return good + neutral + bad;
  };

  const total = countTotalFeedback();
  const totalPercentage = totalPositivePercentage();

  return (
    <div>
      <Section title="Please leave your feedback here!">
        <FeedbackOptions
          options={Object.keys(formState)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistic">
        {total > 0 ? (
          <Statistics
            data={formState}
            total={total}
            positiveFeedback={totalPercentage}
          />
        ) : (
          <Notification message="There is no feedback :(" />
        )}
      </Section>
    </div>
  );
};
