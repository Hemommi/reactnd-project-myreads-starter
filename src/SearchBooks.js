import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelfChanger from './BookShelfChanger'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends React.Component {
  state = {
    books: [],
    query:'',
    showSearchPage: false
  }
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookShelfChange: PropTypes.func.isRequired,
    showSearchPage: PropTypes.bool.isRequired
}

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

    render() {
      let showingBooks
        if(this.state.query) {
          const match = new RegExp(escapeRegExp(this.state.query), 'i')
          showingBooks = this.props.books.filter((books) => match.test(books.title))
        }else{
          showingBooks = this.props.books
        }

        showingBooks.sort(sortBy('title'))

        return (
            <div className="search-books">
            <div className="search-books-bar">
            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                  />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {showingBooks.map((book) =>(
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