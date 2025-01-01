import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.Styled';

export const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
