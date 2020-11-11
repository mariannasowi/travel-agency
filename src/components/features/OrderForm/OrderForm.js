import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PropTypes from 'prop-types';

class OrderForm extends React.Component {
  render(){
		const {tripCost, options} = this.props;
    return(   
      <Row>
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options} />
        </Col>
      </Row>
    ); 
  }
}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;