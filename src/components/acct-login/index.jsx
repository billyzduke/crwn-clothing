// <AcctLogin />
import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import { loginGoogleStart, loginEmailStart } from 'stores/user/actions'
import FormInput from 'components/form-input'
import FormButton from 'components/form-button'

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

  handleSubmit = async e => {
    e.preventDefault()
    const { loginEmailStart } = this.props
    const { email, password } = this.state
    loginEmailStart(email, password)
  }

  render() {
    const { loginGoogleStart } = this.props
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
              type="button"
              onClick={ loginGoogleStart }
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

const mapDispatchToProps = dispatch => ({
  loginEmailStart: (email, password) => dispatch(loginEmailStart({ email, password })),
  loginGoogleStart: () => dispatch(loginGoogleStart())
})

export default connect(null, mapDispatchToProps)(AcctLogin)
