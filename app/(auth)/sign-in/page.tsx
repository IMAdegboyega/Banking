import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/ACTIONS/user.actions'
import React from 'react'

const SignIn = async () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm
        type="sign-in"
      />
    </section>
  )
}

export default SignIn 