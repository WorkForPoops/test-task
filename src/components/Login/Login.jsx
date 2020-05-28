import React from 'react';
import LoginReduxForm from './LoginForm';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import styles from './Login.module.css';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.username, formData.password);
  }

  if(props.isAuth) {
    return <Redirect to='/profile'/>
  }

  return (
    <div className={styles.login}>
      <LoginReduxForm onSubmit={onSubmit} />
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)