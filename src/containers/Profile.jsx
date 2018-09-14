import { connect } from 'react-redux';
import Profile from '../components/Profile';

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(Profile);
