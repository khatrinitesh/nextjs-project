import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";

export default function Contact() {
  const router = useRouter();

  const { handleSubmit, register, formState: { errors } } = useForm();
 const onSubmit = values => alert(values.email + " " + values.password);

  function handleClick(){
    router.push('/about')
  }
  return (
    <div>
      Contact
      <button className='btn btn-primary' onClick={handleClick}>Click primary</button>
      <form onSubmit={handleSubmit(onSubmit)}>
       <h1>Register</h1>
       <div className="formInput">
         <label>Email</label>
         <input
           type="email"
           {...register("email", {
             required: "Required",
             pattern: {
               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
               message: "invalid email address"
             }
           })}
         />
         {errors.email && errors.email.message}
       </div>
       <div className="formInput">
         <label>Password</label>
         <input
           type="password"
           {...register("password", {
             required: "Required",
             pattern: {
               value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
               message: "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol."
             }
           })}
         />
         {errors.password && errors.password.message}
       </div>
       <button type="submit">Submit</button>
     </form>
    </div>
  )
}
