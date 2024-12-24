import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleUpdate = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.handleUpdate('good')}>Good</button>
        <button onClick={() => this.handleUpdate('neutral')}>Neutral</button>
        <button onClick={() => this.handleUpdate('bad')}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    );
  }
}
