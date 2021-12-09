import PropTypes from 'prop-types';
import s from '../Container/Container.module.scss';

const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
);

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
