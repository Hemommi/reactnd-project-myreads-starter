import React from 'react'
import './App.css'
import PropTypes from 'prop-types'
/*import Books from './Books'*/
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

class BookShelf extends React.Component {
    static propTypes={
        books: PropTypes.array.isRequired,
    }
    state = {};
    /* const {books, onShelf} = this.props */ 
    render() {
         return (
            <div className="list-books-content">
                <div>
                    {this.props.bookShelfTitle.map((bookShelfTitle) => (
                        <div className="bookshelf" key = {this.props.id}>
                        <h2 className="bookshelf-title">{this.props.name}</h2>
                        <div className="bookshelf-books">
                        </div>
                        </div>
                    ))}
                </div>
            </div>       
         )         
     }
}
export default BookShelf;

