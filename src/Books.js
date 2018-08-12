import React,{ Component } from 'react'
import PropTypes from 'prop-types' 
import BookShelf from './BookShelf.js'
import './App.css'

class Books extends React.Component {
    static propTypes={
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }
    state={}
    render() {
        const bookShelfTitle = [{id:"currentlyReading", name: "Currently Reading"},
                                {id: "wantToRead", name: "Want to Read"},
                                {id: "Read", name: "Read"}];     
        const {books, changeShelf} = this.props         
        return (
            <div className="list-books">
                <div className="list-books-title" >
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    {bookshelfTitle.map((bookshelfTitle) => (
                    <div className="bookshelf" key = {bookshelfTitle.id}>
                    <h2 className="bookshelf-title">{bookshelfTitle.name}</h2>
                    <div className="bookshelf-books">
                        <Bookshelf
                            books = {booksOnShelf}
                            changeShelf = {changeShelf}
                        />
                        </div>
                    </div>
                    ))}
                    </div> 
               </div>
            </div>
            

        )
    }
}
export default Books