import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from "react-router-dom";

const SingleBook = () => {
  const { _id, bookTitle, imageURL, price, bookDescription, authorName } = useLoaderData();

  return (
    <div className="px-4 lg:px-24 bg-cyan-50  flex items-center">
      {/* About section */}
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2">
          {/* <img src={Favbooks} alt="" className="rounded md:w-10/12" /> */}
          <img src={imageURL} alt="" className='rounded' />
        </div>
        <div className="md:w-1/2">
          <h2 className='font-bold'>{bookTitle}</h2>
          <h3 className='font-bold text-red-500'>{authorName}</h3>
          <p className="md:w-4/4">{bookDescription}</p>
          <p className='font-bold'>${price}</p>
        </div>
        <div className="md:w-1/2 space-y-8 h-full">
          <div></div>
          <Link to="/shop" className="mt-8 block">
            <button
              className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleBook