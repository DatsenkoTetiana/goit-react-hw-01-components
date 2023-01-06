import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from '../Statistics/Statistics.styled.jsx';
export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <StatList>
        {stats.map(({id, label, percentage}) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Wrapper>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
