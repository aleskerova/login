import { connect } from 'react-redux';
import Main from '../components/Main';
import { getUserData } from '../actions/auth.actions';

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapDispatchToProps = {
  getUserData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
