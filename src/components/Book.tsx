/**
* @author Ashleigh Taylor <ash0606@me.com>
* Last Updated: 11.13.23
*  
* Discription 
*
* @param {type} name - discription 
*
* @returns {React.ReactElement}}  discription 
*
*/


import React from "react";
import BookFront from "./BookFront";
import BookSpine from "./BookSpine";
import book from "../classes /BookClass"

interface props{
    book: book;
}



function Book(props: props){

    if (props.book.inBookshelf)
        return(<BookSpine book = {props.book}/>);
    else
        return(<BookFront book = {props.book} />);
}

export default Book;