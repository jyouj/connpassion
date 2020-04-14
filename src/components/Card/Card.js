import React, {Component} from 'react';

import Box from './Box/Box'

import './Card.css'

class Card extends Component {
    state = {books: []}

    getGoogleBooks() {
        const url = new URL('https://www.googleapis.com/books/v1/volumes');
        url.searchParams.append('q', this.props.match.params.lang);
        fetch(url, {
            mode: 'cors',
        }).then(res => {
            return res.json();
        }).then(json => {
            this.setState({books: json.items});
        })
    }

    componentDidMount() {
        this.getGoogleBooks()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.lang !== prevProps.match.params.lang) {
            this.getGoogleBooks()
        }
        
    }

    render() {
        return(
            <div className="container">{ this.state.books.map((book, idx) => {
                return <Box key={idx} bookInfo={book} />
                }) }
            </div>
        );
    }
}

export default Card;