import React from 'react'
import './App.css'
import Books from './Books'
import PropTypes from 'prop-types'

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

    state = {};
    
    render() {
         return (
            <div className="list-books-content">
                <div>
                    {this.props.bookShelfTitle.map((bookShelfTitle) => (
                        <div className="bookshelf" >
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

