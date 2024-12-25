import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.onHandleClick('good')}>Good</button>
        <button onClick={() => this.onHandleClick('neutral')}>Neutral</button>
        <button onClick={() => this.onHandleClick('bad')}>Bad</button>
        <h2>Statistics</h2>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total}</p>
        <p>Positi</p>
      </div>
    );
  }
}
