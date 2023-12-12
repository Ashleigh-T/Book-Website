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
import book from "../classes /BookClass"
import "../styling/BookFront.css"

interface props{
    book: book;
}

function BookFront(props: props){

    return(
        <div className = 'book'>
            <div className = 'spine'> 
                <div className = 'triangle_left_top'></div>
                <h2 className = 'seriesNumber'>
                    {props.book.getSeriesNumber()}
                </h2>
                <div className = 'triangle_left_bottom'></div>
            </div>
            <div className = 'cover'>
                <div className = 'top_of_cover'>
                    <div className = 'triangle_right_top'></div>
                    <div className = 'bookmark'>
                        <div className = 'triangle'></div>
                    </div>
                </div>
                <h2 className = 'bookTitle'>{props.book.getTitle()}</h2>
                <div className = 'triangle_right_bottom'></div>
            </div>
        </div>
    );

}

export default BookFront;