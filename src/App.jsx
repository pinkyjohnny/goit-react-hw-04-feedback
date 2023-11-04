import { FeetbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import { Notification } from 'components/Notification/Notification.jsx';
import { Section } from 'components/Section/Section.jsx';
import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = selectedOption => {
    this.setState(prev => ({ [selectedOption]: prev[selectedOption] + 1 }));
  };

  totalPositivePercentage = () => {
    return this.countTotalFeedback === 0
      ? 0
      : Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const totalPercentage = this.totalPositivePercentage();

    return (
      <div>
        <Section title="Please leave your feedback here!">
          <FeetbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistic">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback :(" />
          )}
        </Section>
      </div>
    );
  }
}
