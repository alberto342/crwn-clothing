import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.style.scss';

class SignIn extends React.Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    };


    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handelChange={this.handleChange}
                               required/>
                    <label>Email</label>

                    <FormInput name="password" type="password" value={this.state.password}
                               handelChange={this.handleChange} required/>
                    <label>Password</label>

                    <CustomButton type="submit"> SIGN IN </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
