import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Password, Login } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';

const LoginForm = ({handleSubmit, error}) => {

    const errorStyle = {
        color: 'red'
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Field component={Login} validate={[required]} name='username' label='Login'/>
                <Field component={Password} validate={[required]} name='password' label='Password' 
                 type='password'/>
                <div>
                    <button>Login</button>
                </div>
                {error && <p style={errorStyle}>{error}</p>}
            </form>

        </div>
  );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;