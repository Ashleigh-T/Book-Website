/**
* @author Ashleigh Taylor <ash0606@me.com>
* Last Updated: 11.14.23
*  
* Discription 
*
* @param {type} name - discription 
*
* @returns {React.ReactElement}}  discription 
*
*/


import React from "react";
import Book from "./Book";
import book from "../classes /BookClass"
import "../styling/Bookshelf.css"
 
// just like how this handles creating multiple book shelfs this needs to sort
// based on the settings of the bookshelf. if no sort is defined books are 
// sorted based on how they are added in 

interface props{
    bookshelfName: string;
    books: book[];
}


function Bookshelf(props: props){
    const books = props.books 
    let currBooks 
    let passedBooks

    
    if (books.length > 10){

        currBooks = books.slice(10);
        passedBooks = books.slice(11,books.length)

        return(
            <>
                <Bookshelf 
                    books = {currBooks} 
                    bookshelfName = {props.bookshelfName}
                /> 
                <Bookshelf 
                    books = {passedBooks}
                    bookshelfName = {props.bookshelfName} 
                />
            </> 
        );
    }

    return(
        <div className = 'bookshelf'>
            <div className = 'top'>
                <span>{props.bookshelfName}</span>
            </div>
            <div className = 'middle'>
                {books.map((book) => (
                    <Book book = {book}/>
                ))}
            </div>
            <div className = 'bottom'></div>
        </div>
    );
}

export default Bookshelf;