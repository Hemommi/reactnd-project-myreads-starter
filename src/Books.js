import React,{ Component } from 'react'
import PropTypes from 'prop-types' 


class Books extends React.Component {
    static propTypes={}
    
    render() {
        const bookshelfTitle = [{id:"currentlyReading", name: "Currently Reading"},
                                {id: "wantToRead", name: "Want to Read"},
                                {id: "Read", name: "Read"}];                 
        return (
            <div className="list-books">
                <div className="list-books-title" >
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    {bookshelfTitle.map((bookshelfTitle) => (
                    <div className="bookshelf" key = {bookshelfTitle.id}>
                    <h2 className="bookshelf-title">{bookshelfTitle.name}</h2>
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