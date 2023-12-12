/**
* @author Ashleigh Taylor <ash0606@me.com>
* Last Updated: 00.00.00
*  
* Discription 
*
* @param {type} name - discription 
*
* @returns {React.ReactElement}}  discription 
*
*/

import React from "react";
import Bookshelf from "./Bookshelf";
import Book from "./Book";
import book from "../classes /BookClass"
import "../styling/WelcomePage.css"

function WelcomePage(){
    const books = [new book(true,'Book', 1, 'blue','hi','green','blue')]
    const book1 = new book(false, 'Book', 2, 'hi', 'hi', 'hi', 'hi')
    

    return(
        <div className = 'page'>
            <h1>Welcome</h1>

            <Bookshelf bookshelfName = 'Your Books' books = {books}/> 

            <h2>Organize your books or let us help you do so</h2>

            <Bookshelf bookshelfName = 'Another Bookshelf' books = {books}/>

            <h2>Create and name as many shelves as you want</h2>

            <Bookshelf bookshelfName = 'Your Books' books = {books}/> 

            <h2>Easy to expand and collapse or just scroll through</h2>

            <div>

                <h2>Create as many books as you like</h2>

                <div className = 'books'>
                    <Book book = {book1}/>
                    <Book book = {book1}/>
                    <Book book = {book1}/>
                </div>
                

                <h2>Change the size</h2>

                <div className = 'books'>
                    <Book book = {book1}/>
                    <Book book = {book1}/>
                    <Book book = {book1}/>
                </div>

                <h2>Change the color</h2>

                <div className = 'books'>
                    <Book book = {book1}/>
                    <Book book = {book1}/>
                    <Book book = {book1}/>
                </div>

                <h2>Name your books with our selection of styles</h2>

                <div className = 'books'>
                    <Book book = {book1}/>
                    <Book book = {book1}/>
                    <Book book = {book1}/>
                </div>

                <h2>You can also include if the book is part of a serise</h2>

                <div className = 'books'>
                    <Book book = {book1}/>
                    <Book book = {book1}/>
                    <Book book = {book1}/>
                </div>

                <h2>
                    Have different themese for each book in a series or keep them 
                    the same with a simple click of a button
                </h2>

                <div className = 'books'>
                    <Book book = {book1}/>
                    <Book book = {book1}/>
                    <Book book = {book1}/>
                </div>


            </div>

        </div>
    )


};

export default WelcomePage; 