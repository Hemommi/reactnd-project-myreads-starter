import React from 'react'
import './App.css'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'
import BookShelfChanger from './BookShelfChanger'
/*import * as BooksAPI from './BooksAPI'*/

class BookShelf extends React.Component {
    static propTypes={
        book: PropTypes.array.isRequired,
    }
    state = {}
    render() {

         return (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.name}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.map((book) =>(
                            <li className="book" key={book.id}>
                                <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("${book.imageLinks.thumbnail}")'}}></div>
                                <BookShelfChanger/>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                                 ))}
                            </ol>
                        </div>
                </div>     
         )         
     }
}
export default BookShelf;

