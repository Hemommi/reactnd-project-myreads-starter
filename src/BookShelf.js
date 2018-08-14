import React from 'react'
import './App.css'
import Books from './Books'

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

