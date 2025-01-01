import { Wrapper, Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Wrapper>
    {options.map(option => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </Wrapper>
);
