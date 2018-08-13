import React from 'react'
/*import PropTypes from 'prop-types'*/ 
/*import BookShelf from './BookShelf.js'*/
import './App.css'
/*import * as BooksAPI from './BooksAPI'*/

const bookShelfTitle = [
    {
    id:"currentlyReading", 
    name: "Currently Reading"
    },
    {
     id: "wantToRead",
     name: "Want to Read"
    },
    {
     id: "read",
     name: "Read"
    }
]; 

class Books extends React.Component {
    /*static propTypes={
        books: PropTypes.array.isRequired,
    }*/
    state={}
    render() {
       /* const {books, onShelf} = this.props */        
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
                <div className="list-books-title" >
                    <h1>MyRead</h1>
                </div>
                <div className="list-books-content">
                </div> 
            </div>
        )}
        </div>
        )
    }
}
export default Books;