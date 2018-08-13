import React from 'react'

class BookShelf extends React.Component {

    state = {};
    
    render() {
         return (
            <div className="list-books-content">
                <div>
                    {this.props.bookShelfTitle.map((bookShelfTitle) => (
                        <div className="bookshelf" id = {bookShelfTitle.id}>
                        <h2 className="bookshelf-title">{bookShelfTitle.name}</h2>
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

