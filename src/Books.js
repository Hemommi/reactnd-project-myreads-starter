import React from 'react'
import PropTypes from 'prop-types' 
/*import BookShelf from './BookShelf.js'*/
import './App.css'
import * as BooksAPI from './BooksAPI'

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
     id: "Read",
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
            <div className="list-books">
                <div className="list-books-title" >
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    {this.props.bookShelfTitle.map((bookShelfTitle) => (
                        <div className="bookshelf" key = {bookShelfTitle.id}>
                        <h2 className="bookshelf-title">{bookShelfTitle.name}</h2>
                        <div className="bookshelf-books">
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