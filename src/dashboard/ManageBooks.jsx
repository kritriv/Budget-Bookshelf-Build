import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";
import { Table } from "flowbite-react";
import { DomainURL } from "../../config";

const ManageBooks = () => {
  const { user } = useContext(AuthContext);
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch(`${DomainURL}/all-books?userId=${user.uid}`)
      .then((res) => res.json())
      .then(response => {
        setAllBooks(response.books);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, [user.uid]); 
  

  //delete a books
  const handleDelete = (id) => {
    fetch(`${DomainURL}/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book is deleted successfully!");
      });
  };
  return (
    <div className="px-2 my-5">
      <h2 className="mb-8 text-3xl font-bold "> Manage Your Books </h2>
      {/* table */}
      <Table className="lg:w-[1150px] ">
        <Table.Head>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        
        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{book.bookTitle}</Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>{book.price}</Table.Cell>
              <Table.Cell>
                <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-2"
                  to={`/user/dashboard/edit-books/${book._id}`}>
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="bg-red-600 px-2 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default ManageBooks;
