import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelfChanger from './BookShelfChanger'

class SearchBooks extends React.Component {
  state = {
    books: []
  }
  static propTypes = {
    books: PropTypes.array.isRequired
}
    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.props.books.map((book) =>(
                  <li className="book" key={book.id}>
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")`}}></div>
                        <BookShelfChanger
                          book = {book}
                          bookShelfChange = {this.props.bookShelfChange}
                        />
                        </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </li>
                  ))}
              </ol>
            </div>
        </div>
        )
    }
}

export default SearchBooks;