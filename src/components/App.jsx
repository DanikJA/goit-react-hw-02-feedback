import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleUpdate = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total > 0 ? ((good / total) * 100).toFixed(2) : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.handleUpdate('good')}>Good</button>
        <button onClick={() => this.handleUpdate('neutral')}>Neutral</button>
        <button onClick={() => this.handleUpdate('bad')}>Bad</button>
        <h2>Statistics</h2>
        {total > 0 ? (
          <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total:{total}</p>
            <p>Positive:{positivePercentage}%</p>
          </div>
        ) : (
          <p>No feedback yet</p>
        )}
      </div>
    );
  }
}
