import {
  StatsContainer,
  StatItem,
  PositiveFeedback,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsContainer>
      <StatItem>Good:{good}</StatItem>
      <StatItem>Neutral:{neutral}</StatItem>
      <StatItem>Bad:{bad}</StatItem>
      <StatItem>Total:{total}</StatItem>
      <PositiveFeedback>
        Positive feedback:{positivePercentage}%
      </PositiveFeedback>
    </StatsContainer>
  );
};
