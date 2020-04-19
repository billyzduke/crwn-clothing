// <Login />
import React from 'react'

import './index.scss'

import FormInput from 'components/form-input'
import FormButton from 'components/form-button'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ email:'', password:'' })
  }

  render() {
    return (
      <div
        className='login'
      >
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form
          onSubmit={ this.handleSubmit }
        >
          <FormInput
            name="email"
            type="email"
            label="email"
            value={ this.state.email }
            handleChange="{this.handleChange}"
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={ this.state.password }
            handleChange="{this.handleChange}"
            required
          />
          <FormButton
            type="submit"
          >
            Sign In
          </FormButton>
        </form>
      </div>
    )
  }
}

export default Login
