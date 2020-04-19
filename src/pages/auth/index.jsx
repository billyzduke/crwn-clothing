// <AuthPage />
import React from 'react'

import AcctLogin from 'components/acct-login'
import AcctSignUp from 'components/acct-signup'

const AuthPage = () => (
  <div
    className="acct-auth"
  >
    <AcctLogin />
    <AcctSignUp />
  </div>
)

export default AuthPage
