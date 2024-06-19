import React, { useState } from "react";
import { Card } from "./Component/Booklist";
import axios from "axios";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const fetchBooks = () => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyBSXr-HcDH35-Fua34mUJY-AbLYlo239b0" + "&maxResults=40")
    .then(res => setData(res.data.items))
    .catch(err => console.log(err))
  }
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      fetchBooks();
    }
  }
  return (
    <div className="main_container">
      <h1>Search your Book.....</h1>
      <div className="input_container">
        <input type="text" placeholder="Search the Book name, Author, Genres 🔎"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchBook}
        />
        <button onClick={fetchBooks}>Search</button>
      </div>
      <div className="card-container">
        {<Card book={bookData} />}

      </div>
    </div>
  )
}