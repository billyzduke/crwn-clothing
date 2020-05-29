// <AcctSignUp />
import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

// import { auth, createUserProfileDoc } from 'firebase-utils'
import { signUpStart } from 'stores/user/actions'
import FormInput from 'components/form-input'
import FormButton from 'components/form-button'

class AcctSignup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      passwordConfirm: ''
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
    const { signUpStart } = this.props
    const { displayName, email, password, passwordConfirm } = this.state
    if (password !== passwordConfirm) {
      alert("passwords don't match")
      return
    }
    signUpStart({ email, password, displayName })
  }

  render() {
    const { displayName, email, password, passwordConfirm } = this.state
    return (
      <div
        className='sign-up'
      >
        <h2>I don't have an account yet</h2>
        <span>Sign up with your email and password</span>
        <form
          className="sign-up-form"
          onSubmit={ this.handleSubmit }
        >
          <FormInput
            name="displayName"
            type="text"
            label="name"
            value={ displayName }
            handleChange={ this.handleChange }
            required
          />
          <FormInput
            name="email"
            type="email"
            label="email"
            value={ email }
            handleChange={ this.handleChange }
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={ password }
            handleChange={ this.handleChange }
            required
          />
          <FormInput
            name="passwordConfirm"
            type="password"
            label="confirm password"
            value={ passwordConfirm }
            handleChange={ this.handleChange }
            required
          />

          <FormButton
            type="submit"
          >
              Sign Up
          </FormButton>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: newUserCreds => dispatch(signUpStart(newUserCreds))
})

export default connect(null, mapDispatchToProps)(AcctSignup)
