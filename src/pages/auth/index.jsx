// <AuthPage />
import React from 'react'

import './index.scss'

import AcctSignIn from 'components/acct-sign-in'
import AcctSignUp from 'components/acct-sign-up'

const AuthPage = () => (
  <div
    className="acct-auth"
  >
    <AcctSignIn />
    <AcctSignUp />
  </div>
)

export default AuthPage
