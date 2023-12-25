import React, { useState } from "react";
import { Button, Select, Label, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";
import { DomainURL } from "../../config";

const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    bookDescription,
    bookPdfUrl,
    price,
  } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Fantasy",
    "Romance",
    "Horror",
    "Humour",
    "Poetry",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "History",
    "Business",
    "Self-help",
    "Children Books",
    "Bibliography",
    "Autobiography",
    "Memior",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [selectedBookCategory, setselectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    setselectedBookCategory(event.target.value);
  };
  //handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const price = form.price.value;

    const updatebookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfUrl,
      price,
    };
    fetch(`${DomainURL}/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatebookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        alert("Book is updated Successfully");
      });
  };
  return (
    <div className="px-1 my-12">
      <h2 className="mb-8 text-3xl font-bold ">Update the book data</h2>
      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              defaultValue={bookTitle}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              defaultValue={authorName}
              required
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL " />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              defaultValue={imageURL}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category " />
              <Select
                id="inputState"
                name="categoryName"
                className="w-full rounded"
                value={selectedBookCategory}
                onChange={handleChangeSelectedValue}
              >
                {bookCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea
          id="bookDescription"
          placeholder="Book Description"
          className="w-full"
          required
          rows={6}
          defaultValue={bookDescription}
        />
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPdfUrl" value="Book PDF URL " />
            </div>
            <TextInput
              id="bookPdfUrl"
              name="bookPdfUrl"
              type="text"
              placeholder="Book PDF URL"
              defaultValue={bookPdfUrl}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="price " />
            </div>
            <TextInput
              id="price"
              name="price"
              type="number"
              placeholder="Book Price"
              defaultValue={price}
            />
          </div>
        </div>
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
