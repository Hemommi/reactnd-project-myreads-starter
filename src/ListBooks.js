import React from 'react'
import BookShelf from './BookShelf'
import './App.css'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {
    
    static propTypes = {
        books: PropTypes.array.isRequired
    }
        state = false; 
    
      /* bookShelfChange = (bookId, event) => {
            let temporaryShelf = this.props.putOnShelf
            const book = temporaryShelf.filter(bookId)
            book.shelf = event.target.value
            BooksAPI.update(book, event.target.value)
                .then(response => {
                this.setState({
                     book: temporaryShelf
                });
            });
        }*/

    render() {
        return (
            <div className="app">
            {this.state.showSearchPage ? (
                <div className="search-books">
                <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                    {/*
                     NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                     you don't find a specific author or title. Every search is limited by search terms.
                     */}
                <input type="text" placeholder="Search by title or author"/>
                </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
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
                </div>
            </div>
            )}           
          {/*   <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div> */}
        </div>
        )
    }
}
export default ListBooks;