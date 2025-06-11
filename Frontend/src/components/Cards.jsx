import React from 'react'

function Cards({item}) {
  console.log(item)
  return (
   <>
   <div className='p-3 my-3 mt-4'>
    <div className="shadow-sm card bg-base-100 w-92 hover:scale-105 duration:200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="justify-between card-actions">
      <div className="badge badge-outline">${item.price}</div>
      <div className="px-2 py-1 duration-300 rounded-full cursor-pointer badge badge-outline hover:bg-pink-500 hover:text-white">Buy now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards
