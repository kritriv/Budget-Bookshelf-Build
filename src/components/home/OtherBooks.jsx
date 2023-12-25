import React, { useEffect, useState } from 'react'
import BookCards from '../BookCards/BookCards';
import { DomainURL } from '../../../config';

const OtherBooks = () => {
    const [books,setbooks]=useState([]);
    useEffect(()=>{
        fetch(`${DomainURL}/all-books`).then(res=>res.json()).then(data=>setbooks(data.books.slice(0,12)));
    },[])
  return (
    <div>
    <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks