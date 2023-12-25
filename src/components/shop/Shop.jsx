import React, { useEffect, useState } from 'react'
import { DomainURL } from '../../../config';
import {Link} from 'react-router-dom';
//import card

import { Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`${DomainURL}/all-books`).then(res => res.json()).then(data => setBooks(data.books))
  }, [])

  const NavigateClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className=' bg-cyan-50  flex items-center'>
      <div className='mt-28 px-4 lg:px24 bg-cyan-50  '>
        <h2 className='text-5xl font-bold text-center'>All Books are here</h2>
        <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
          {
            books.map(book => <Card key={book._id}>
              <img src={book.imageURL} alt="" className='h-96' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                  {book.bookTitle}
                </p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                  {book.authorName}
              </p>
              <Link to={`/book/${book._id}`} onClick = {NavigateClick} className='bg-blue-700 font-semibold text-white py-2 rounded p-20'> View Book Details</Link>
            </Card>)
          }
        </div>
      </div>
    </div>
  )
}

export default Shop