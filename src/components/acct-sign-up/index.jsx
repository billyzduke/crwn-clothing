// <AcctSignUp />
import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import './index.scss'

// import { auth, createUserProfileDoc } from 'firebase-utils'
import { signUpStart } from 'stores/user/actions'
import FormInput from 'components/form-input'
import FormButton from 'components/form-button'

const AcctSignup = () => (
  <div
    className='sign-up'
  >
    <h2>I don't have an account yet</h2>
    <span>Sign up with your email and password</span>
    <Formik
      initialValues={
        {
          displayName: '',
          email: '',
          password: '',
          passwordConfirm: ''
        }
      }
      validationSchema={
        Yup.object({
          displayName: Yup.string().required().min(1),
          email: Yup.string().email().required('Required'),
          password: Yup.string().required().min(6),
          passwordConfirm: Yup.string().required().oneOf([Yup.ref('password'), null], 'Password entries do not match')
        })
      }
      onSubmit={ (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))

          const { signUpStart } = this.props
          signUpStart(values)

          setSubmitting(false)
        }, 400)
      } }
    >
      { ({ isSubmitting }) => (
        <Form>
          <FormInput
            name="displayName"
            type="text"
          />
          <FormInput
            name="email"
            type="email"
          />
          <FormInput
            name="password"
            type="password"
          />
          <FormInput
            name="passwordConfirm"
            type="password"
          />
          <FormButton
            type="submit"
            disabled={ isSubmitting }
          >
            Sign Up
          </FormButton>
        </Form>
      ) }
    </Formik>
  </div>
)

const mapDispatchToProps = dispatch => ({
  signUpStart: newUserCreds => dispatch(signUpStart(newUserCreds))
})

export default connect(null, mapDispatchToProps)(AcctSignup)
