import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue, currentValue}) => (
  <div>
    <input
      className={styles.input}
      type='text'
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};
  
export default OrderOptionText;