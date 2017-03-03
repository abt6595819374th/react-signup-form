import React from 'react';
import SingupForm from './SingupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';

class SignupPage extends React.Component {
  render () {
    const { userSignupRequest } = this.props;
    return (
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <SingupForm userSignupRequest={userSignupRequest} />
      </div>
    </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};

export default connect(null, { userSignupRequest })(SignupPage);