import React from 'react'
import { Link,  useLocation, useNavigate } from 'react-router-dom'
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


function Signup() {

  const location = useLocation()
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'

  
     const { register, handleSubmit, formState:{ errors }, } = useForm();
       const onSubmit = async(data) => {
        const userInfo = {
          fullname: data.fullname,
          email: data.email,
          password: data.password
          
        }
        await axios.post("http://localhost:3001/user/signup",userInfo)
        .then((res)=>{
          console.log(res.data);
          if(res.data){
            toast.success("signup succeed");
           navigate(from, { replace: true });
            
          }
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }).catch((err)=>{
          if(err.response){
            console.log(err);
            toast.error("error:" + err.response.data.message); 
          }
        })
          
        
       }
  return (
   <>
   <div className='flex items-center justify-center h-screen'>
      <div className="w-[600px]">
  <div className="">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="absolute btn-circle btn btn-sm btn-ghost right-2 top-2">✕</Link>
    {/* </form> */}
    <h3 className="text-lg font-bold">Signup</h3>
    {/* Name */}
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type="text" placeholder='Enter your Fullname' className='px-3 py-1 border rounded-md outline-none w-80'
        {...register("fullname", { required: true })}
         />
         <br />
         {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter your email' className='px-3 py-1 border rounded-md outline-none w-80'
        {...register("email", { required: true })}/>
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    {/* Password */}
    <div className='mt-4 space-y-2'>
    <span>Password</span>
    <br />
    <input type="password" placeholder='Enter your password' className='px-3 py-1 border rounded-md outline-none w-80'
    {...register("password", { required: true })} />
    <br />
    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Button */}
    <div className='flex justify-around mt-6'>
        <button className='px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700'>Signup</button>
        
        <p className="text-xl">Have account? 
        <button className='text-blue-500 underline cursor-pointer'onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>{" "}
        <Login />
        </p>
    </div>
   </form>
    
  </div>
</div>
   </div>
   
   </>
  )
}

export default Signup
