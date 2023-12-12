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

interface props{
    book: book;
}


import React from "react";
import book from "../classes /BookClass"
import "../styling/BookSpine.css"

function BookSpine(props: props){

    return(
        <div className = "book_">
            <div className = 'spine_'>
                <h2 className = 'bookTitle_'>{props.book.getTitle()}</h2>
                <h2 className = 'seriesNumber_'>
                    {props.book.getSeriesNumber()}
                </h2>
            </div>
        </div>
    );

}

export default BookSpine;