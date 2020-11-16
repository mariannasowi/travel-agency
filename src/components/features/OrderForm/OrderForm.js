import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PropTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import { formatPrice } from '../../../utils/formatPrice';

const sendOrder = (options, tripCost, tripDetails) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    ...tripDetails,
  };
  
  if(payload.contact != '' && payload.name != '' && payload['start-date'] != '') {
    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('Required: Name, Contact and Date');
  }
};

class OrderForm extends React.Component {
  render(){
    const {tripCost, options, setOrderOption, tripDetails} = this.props;
    return(
      <Row>
        {pricing.map(opt => (
          <Col md={4} key={opt.id}>
            <OrderOption {...opt} currentValue={options[opt.id]} setOrderOption={setOrderOption}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
        <Button onClick={() => sendOrder(options, tripCost,  tripDetails)}>Order now!</Button>
      </Row>
    ); 
  }
}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripDetails: PropTypes.object,
};

export default OrderForm;