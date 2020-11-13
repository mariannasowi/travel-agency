import { connect } from 'react-redux';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';
import OrderForm from './OrderForm';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: order => dispatch(setOrderOption(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);