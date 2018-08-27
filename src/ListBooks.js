import React from 'react'
import BookShelf from './BookShelf'
import './App.css'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
/*import SearchBooks from './SearchBooks'*/

class ListBooks extends React.Component {
    
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookShelfChange: PropTypes.func.isRequired
    }
        state = false; 

    render() {
        return (
            <div className="list-books"> 
                <div className="list-books-content">
                     <div>
                        <BookShelf 
                            id="currentlyReading" 
                            name= "Currently Reading"
                            books= {this.props.books.filter(book => book.shelf === "currentlyReading")}
                            bookShelfChange={this.props.bookShelfChange}
                        />
                        <BookShelf 
                            id= "wantToRead" 
                            name= "Want to Read"
                            books= {this.props.books.filter(book => book.shelf === "wantToRead")}
                            bookShelfChange={this.props.bookShelfChange}
                        />
                        <BookShelf 
                            id= "read" 
                            name= "Read" 
                            books= {this.props.books.filter(book => book.shelf === "read")}
                            bookShelfChange={this.props.bookShelfChange}
                        /> 
                    </div>
                    <div className="open-search">
                        <Link to='/search'>Add a book</Link>
                    </div> 
                </div>
            </div>          
            
        )
    }
}
export default ListBooks;