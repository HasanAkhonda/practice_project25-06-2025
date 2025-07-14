import { ProfileForm } from '@/components/example-form'
import CreateAccountForm from '@/components/forms/CreateAccountForm'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center h-screen justify-center'>
      <ProfileForm/>
    </div>
  )
}

export default page