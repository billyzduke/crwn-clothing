// <AcctLogin />
import React from 'react'

import './index.scss'

import FormInput from 'components/form-input'
import FormButton from 'components/form-button'

import { signInWithGoogle } from 'firebase-utils'

class AcctLogin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div
        className='login'
      >
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form
          className="login-form"
          onSubmit={ this.handleSubmit }
        >
          <FormInput
            name="email"
            type="email"
            label="email"
            value={ this.state.email }
            handleChange={ this.handleChange }
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={ this.state.password }
            handleChange={ this.handleChange }
            required
          />
          <div
            className="buttons"
          >
            <FormButton
              type="submit"
            >
              Sign In
            </FormButton>
            <FormButton
              onClick={ signInWithGoogle }
              isGoogleSignIn
            >
              Sign In with Google
            </FormButton>
          </div>
        </form>
      </div>
    )
  }
}

export default AcctLogin
