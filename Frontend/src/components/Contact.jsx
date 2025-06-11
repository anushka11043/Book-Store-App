import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';



function Contact() {
    const { register, handleSubmit, formState:{ errors }, } = useForm();
           const onSubmit = data => console.log(data);
  return (
    <>
    <div className='flex items-center justify-center h-screen'>
      <div className="w-[600px]">
  <div className="">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="absolute btn-circle btn btn-sm btn-ghost right-2 top-2">✕</Link>
    {/* </form> */}
    <h3 className="text-xl font-bold">Contact Us</h3>
    {/* Name */}
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type="text" placeholder='Enter your name' className='px-3 py-1 border rounded-md outline-none w-80'
        {...register("fullname", { required: true })}
         />
         <br />
         {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Email address' className='px-3 py-1 border rounded-md outline-none w-80'
        {...register("email", { required: true })}/>
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    {/* Message */}
    <div className='mt-4 space-y-2'>
    <span>Message</span>
    <br />
    <input type="text" placeholder='Enter your message' className='px-3 py-1 border rounded-md outline-none w-80'
    {...register("password", { required: true })} />
    <br />
    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Button */}
    <div className='flex mt-6 '>
        <button className='px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700'>Submit</button>
        
        
    </div>
   </form>
    
  </div>
</div>
   </div>
    </>
  )
}

export default Contact
