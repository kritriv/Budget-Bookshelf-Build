import React, { useEffect, useState , useContext} from 'react';
import Favouritebook from "../assets/Favouritebook.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../contects/AuthProvider";
import { DomainURL } from "../../config";


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalUserCount, setTotalUserCount] = useState(0);

  useEffect(() => {
    axios.get(`${DomainURL}/all-books`) 
      .then(response => {
        setTotalBooks(response.data.totalCount);
      })
      .catch(error => {
        console.error('Error fetching total book count:', error);
      });
  }, []);

  useEffect(() => {
    axios.get(`${DomainURL}/all-books?userId=${user.uid}`) 
      .then(response => {
        const { books } = response.data;
        const totalUserBooks = books.length;
        setTotalUserCount(totalUserBooks);
      })
      .catch(error => {
        console.error('Error fetching total user book count:', error);
      });
  }, [user.uid]);

  return (
    <div className="px-4 lg:px-24   flex flex-col md:flex-row justify-between items-center gap-12">
    <div className="md:w-2/3 space-y-6">
      <h2 className="text-5xl font-bold my-4 md:w:3/4">
        Sell your Used <br /><span className="text-blue-700">Book Here!</span>
      </h2>
      <p className="mb-10  text-lg md:w-5/6">
        At Budget Bookshelves, we understand the importance of creating a
        cozy, organized space for your beloved books without breaking the
        bank. Our mission is to provide budget-friendly solutions for every
        book lover, making it easy to showcase and access your favorite reads
        without compromising on style.
      </p>
      {/* stats */}

      <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
        <div>
          <h3 className="text-3xl font-bold">{totalBooks}</h3>
          <p className="text-base">Total Books Listed</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">{totalUserCount}</h3>
          <p className="text-base">Total Your Books</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">1200+</h3>
          <p className="text-base">PDF Downloads</p>
        </div>
      </div>
      <Link to="/user/dashboard/upload" className="mt-8 block">
        <button
          className="bg-blue-700 text-white font-semibold px-5 py-2 rounded 
      hover:bg-black transition-all duration-300"
        >
          Sell more Books
        </button>
      </Link>
    </div>
    <div className="md:w-1/2">
      <img src={Favouritebook} alt="" className=" h-120 w-80 rounded md:w-10/12 " />
    </div>
  </div>
  );
};

export default Dashboard;
