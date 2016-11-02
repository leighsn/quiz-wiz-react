import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const SignupForm = (props) => {

  const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password"/>
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <Field name="password_confirmation" component="input" type="password"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
}

SignupForm = reduxForm({
  form: 'signup' // a unique name for this form
})(SignupForm);

export default SignupForm;
