import React from 'react'
import './App.css'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'
import BookShelfChanger from './BookShelfChanger'

class BookShelf extends React.Component {
    static propTypes={
        books: PropTypes.array.isRequired,
        bookShelfChange: PropTypes.func.isRequired
    }
    
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map((book) =>(
                                <li className="book" key={book.id}>
                                    <div className="book-top">
                                    {book.imageLinks ? ( 
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")`}}></div>
                                     ) : (
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "none"}}></div>  
                                    )} 
                                    <BookShelfChanger
                                        book = {book}
                                        bookShelfChange = {this.props.bookShelfChange}
                                    />
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors.join(', ')}</div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>     
         )         
     }
}

export default BookShelf;

