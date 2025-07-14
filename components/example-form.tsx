'use client'

import { useForm } from "react-hook-form"


export function ProfileForm() {

  const { handleSubmit, register, formState: { errors } } = useForm()
  const arr = [1, 2, 2, 3, 4, 56, 6, 5]



  const handleForm = (e) => {
    console.log(e)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)} action="" className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label htmlFor="username">user name </label>
          <input type="text" id="username" className="border-2" placeholder="user name" {...register('username')} />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="password">password </label>
          <input type="password" id="password" className="border-2" placeholder="insert password" {...register('password')} />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="passwordC">confirm password </label>
          <input type="password" id="passwordC" className="border-2" placeholder="confirm password" {...register('passwordC')} />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email">email</label>
          <input type="text" id="email" className="border-2" placeholder="user name" {...register('email')} />
        </div>



        <button type="submit">
          submit
        </button>
      </form>
    </div>
  )

}