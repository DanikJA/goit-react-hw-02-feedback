import { Wrapper, Button } from './Feedback.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Wrapper>
      <Button onClick={() => onLeaveFeedback('good')}>Good</Button>
      <Button onClick={() => onLeaveFeedback('neutral')}>Neutral</Button>
      <Button onClick={() => onLeaveFeedback('bad')}>Bad</Button>
    </Wrapper>
  );
};
