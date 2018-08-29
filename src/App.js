import React from 'react'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBookTitle from './ListBookTitle'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books:[],
    showSearchPage: false
  }
  
  componentDidMount() {
    BooksAPI.getAll()
      .then(data => {
        this.setState({
          books:data
        });
      });
  }

  booksLoadedOnShelf() {
    BooksAPI.getAll()
      .then(data => {
        this.setState({
          books:data
        });
      });
  }

  bookShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(response => {
       this.booksLoadedOnShelf();
      });
  }

  closeSearch = () => {
      this.setState({
      showSearchPage:false
    });
  } 

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => ( 
          <SearchBooks
            books={this.state.books}
            bookShelfChange={this.bookShelfChange}
            closeSearch={this.closeSearch} 
          />
          )}/>
          <div className="list-books">
          <Route exact path="/" render={() => (
            <ListBookTitle/>
          )}/> 
          <Route exact path="/" render={() => (
            <ListBooks 
              books={this.state.books}
              bookShelfChange={this.bookShelfChange}
            />
          )}/>
          </div>   
      </div>
    )
  }
}

export default BooksApp;