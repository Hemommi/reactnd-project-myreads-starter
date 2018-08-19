import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookShelfChanger extends React.Component {
    static propTypes={
        book: PropTypes.object.isRequired,
        bookShelfChange: PropTypes.func.isRequired
    }
    state={}

   /* bookShelfChange = (bookId, event) => {
        let temporaryShelf = this.props.putOnShelf
        const book = temporaryShelf.filter(bookId)
        book.shelf = event.target.value
        book.shelf = putOnShelf.shelf
        BooksAPI.update(book, event.target.value)
            .then(response => {
            this.setState({
                 book: temporaryShelf
            });
        });
    }*/
    
    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.book.shelf} onChange={event => this.props.bookShelfChange(this.props.book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;