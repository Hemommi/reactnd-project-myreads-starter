import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'

class SearchBooks extends React.Component {
  state = {
    books: [],
    query:'',
    localShowSearchPage: false,
    showingBooks: []
  }
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookShelfChange: PropTypes.func.isRequired,
    closeSearch: PropTypes.func.isRequired
    
  }

  updateQuery = (query) => {
    this.setState({ query: query });
    this.searchBooks(query) ;
  } 

  searchBooks(query) {
    BooksAPI.search(query) 
      .then(serverBooks => {
        if(Array.isArray(serverBooks)) {
          this.setState({
            showingBooks: serverBooks
        });
      } else {
          this.setState({
            showingBooks: []
        })
      } 
    })
  }
    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search"  onClick={() => this.props.closeSearch()}>Close</Link> 
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
                {this.state.showingBooks.map((book) =>(
                  <li className="book" key={book.id}>
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail: "none"}")`}}></div>
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