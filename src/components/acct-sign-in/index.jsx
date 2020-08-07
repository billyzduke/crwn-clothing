// <AcctSignIn />
import React, { useState } from 'react'
import { connect } from 'react-redux'

import './index.scss'

import { signInGoogleStart, signInEmailStart } from 'stores/user/actions'
import FormInput from 'components/form-input'
import FormButton from 'components/form-button'

const AcctSignIn = ({ signInGoogleStart, signInEmailStart }) => {
  const [userCreds, setUserCreds] = useState({ email: '', password: '' })
  const { email, password } = userCreds

  const handleChange = e => {
    const { value, name } = e.target
    setUserCreds({
      ...userCreds,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    signInEmailStart(email, password)
  }

  return (
    <div
      className='sign-in'
    >
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form
        className="sign-in-form"
        onSubmit={ handleSubmit }
      >
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
            onClick={ signInGoogleStart }
            isGoogleSignIn
          >
              Sign In with Google
          </FormButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signInEmailStart: (email, password) => dispatch(signInEmailStart({ email, password })),
  signInGoogleStart: () => dispatch(signInGoogleStart())
})

export default connect(null, mapDispatchToProps)(AcctSignIn)
