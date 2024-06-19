import { useState } from "react";
import React from "react";
import Modal from "./Modal";

export const Card = ({ book }) => {

  const [show, setShow] = useState(false);
  const [bookitem, setItem] = useState();
  console.log(book)
  return (
    <>
      {
        book.map((item) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

          let bookname = item.volumeInfo.title
          // let author=item.volumeInfo.authors
          // let genre=item.volumeInfo.categories
          let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount
          if (thumbnail != undefined && amount != undefined) {
            return (
              <>
                <div className="card" onClick={() => { setShow(true); setItem(item) }}>

                  <img src={thumbnail} alt="Book Cover" />

                  <div className="card-content">
                    <h1 className="card-title">{bookname}</h1>
                    <p className="price">&#8377; {amount}</p>
                   

                  </div>
                </div>
                <Modal show={show} item={bookitem} onClose={() => setShow(false)} />
                
              </>
            )
          }


        })
      }

    </>
  )
}