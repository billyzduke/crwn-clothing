// <AcctSignUp />
import React, { useState } from 'react'
import { connect } from 'react-redux'

import './index.scss'

// import { auth, createUserProfileDoc } from 'firebase-utils'
import { signUpStart } from 'stores/user/actions'
import FormInput from 'components/form-input'
import FormButton from 'components/form-button'

const AcctSignup = ({ signUpStart }) => {
  const [userCreds, setUserCreds] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const { displayName, email, password, passwordConfirm } = userCreds

  const handleChange = e => {
    const { value, name } = e.target
    setUserCreds({
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      alert("passwords don't match")
      return
    }
    signUpStart({ email, password, displayName })
  }

  return (
    <div
      className='sign-up'
    >
      <h2>I don't have an account yet</h2>
      <span>Sign up with your email and password</span>
      <form
        className="sign-up-form"
        onSubmit={ handleSubmit }
      >
        <FormInput
          name="displayName"
          type="text"
          label="name"
          value={ displayName }
          handleChange={ handleChange }
          required
        />
        <FormInput
          name="email"
          type="email"
          label="email"
          value={ email }
          handleChange={ handleChange }
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={ password }
          handleChange={ handleChange }
          required
        />
        <FormInput
          name="passwordConfirm"
          type="password"
          label="confirm password"
          value={ passwordConfirm }
          handleChange={ handleChange }
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

const mapDispatchToProps = dispatch => ({
  signUpStart: newUserCreds => dispatch(signUpStart(newUserCreds))
})

export default connect(null, mapDispatchToProps)(AcctSignup)
