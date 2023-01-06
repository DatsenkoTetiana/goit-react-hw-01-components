import PropTypes, { string } from 'prop-types';
import { Table, Thead, Tbody } from './TransactionHistory.styled.jsx';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <Thead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Thead>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tbody key={id}>
                <td>{ type}</td>
                <td>{ amount}</td>
                <td>{ currency}</td>
          </Tbody>
        ))}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    ),
};