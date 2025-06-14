import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'

function Course() {

    const[book,setBook] = useState([])
    useEffect(()=>{
        const getBook = async()=>{
            try{
                const res = await axios.get("http://localhost:3001/book");
                console.log(res.data);
                setBook(res.data);
                
            }catch(error){
                console.log(error);
                
            }
        }
        getBook();
    },[])
    
    
  return (
    <>
    <div className='container px-4 mx-auto max-w-screen-2xl md:px-20'>
        <div className='items-center justify-center text-center mt-28'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you{" "} <span className='text-pink-500 '>here!!!</span></h1>
            <p className='mt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus, sed repudiandae architecto minus ab, rerum at corporis voluptate, deleniti similique consequuntur nostrum! Eum cumque facilis, delectus pariatur ipsa totam.</p>

            
            <Link to={"/"}>
            <button className='px-4 py-2 mt-6 text-white duration-300 bg-pink-500 rounded-md py hover:bg-pink-600'>Back</button>
            </Link>
            
        </div>
        <div className='grid grid-cols-1 mt-12 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item} />
                ))
            }
            
        </div>
    </div>
    </>
  )
}

export default Course
