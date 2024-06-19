import React from "react";
import { useState } from "react";
import { Cart } from "./Cart";
const Modal=({show,item,onClose})=>{
if(!show){
return null;
}
const [cart, setCart] = useState(false);
  const [cartItem, setcartItem] = useState();

let thumbnail= item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
let bookname=item.volumeInfo.title;
let author=item.volumeInfo.authors;
let publishing=item.volumeInfo.publisher   
let published_year=item.volumeInfo.publishedDate  
let descrip= item.volumeInfo.description 
return(
    <>
    <div className="overlay">
        <div className="inner-overlay">
            <button onClick={onClose} className="close_btn">❌</button>
            <div className="inner-box">
                <img src={thumbnail}/>
                <div className="inner_info">
                    <h1>{bookname}</h1>
                    <h3>{author}</h3>
                    <h4>{publishing} <span>{published_year}</span></h4>
                    <button onClick={() => { setCart(true); setcartItem(item) }} className="add-to-cart-btn">Purchase Now</button>
                </div>
            </div>
            <h4>{descrip} </h4>
        </div>
        <Cart cart={cart} item={cartItem}/>
    </div>
    
    </>
)}
export default Modal;

