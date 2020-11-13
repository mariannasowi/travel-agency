import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PropTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

class OrderForm extends React.Component {
  render(){
		const {tripCost, options, setOrderOption} = this.props;
    return(   
      <Row>
        {pricing.map(opt => (
          <Col md={4} key={opt.id}>
            <OrderOption {...opt} currentValue={options[opt.id]} setOrderOption={setOrderOption}/>
          </Col>
        ))}
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
  setOrderOption: PropTypes.func,
};

export default OrderForm;