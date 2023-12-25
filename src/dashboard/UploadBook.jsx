import React, { useState, useContext } from "react";
import { Button, Select, Label, TextInput, Textarea } from "flowbite-react";
import { DomainURL } from "../../config";
import { AuthContext } from "../contects/AuthProvider";

const UploadBook = () => {
  const { user } = useContext(AuthContext);
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
    "Reference books",
    "Mathematics",
    "Physics",
    "Chemistry",
  ];
  const [selectedBookCategory, setselectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    setselectedBookCategory(event.target.value);
  };

  //handle book submission
  const handleBookSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const userId = user.uid;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const price = form.price.value;

    const bookObj = {
      userId,
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfUrl,
      price,
    };
    try {
      const response = await fetch(`${DomainURL}/upload-book`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(bookObj),
      });

      if (response.ok) {
        alert("Book uploaded successfully!");
        form.reset();
      } else {
        console.error("Error uploading book");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="px-1 my-12">
      <h2 className="mb-8 text-3xl font-bold ">Upload A book</h2>
      <form
        onSubmit={handleBookSubmit}
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
              required
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
              required
            />
          </div>
        </div>
        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
