import React, {Component} from 'react';

class Card extends Component {
    state = {books: []}

    getGoogleBooks() {
        const url = new URL('https://www.googleapis.com/books/v1/volumes');
        url.searchParams.append('q', this.props.match.params.lang);
        console.log(url.toString());
        fetch(url, {
            mode: 'cors',
        }).then(res => {
            return res.json();
        }).then(json => {
            this.setState({books: json.items});
            console.log(this.state.books);
        })
    }

    componentDidMount() {
        console.log(this.props.match.params.lang)
        this.getGoogleBooks()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.lang !== prevProps.match.params.lang) {
            console.log(this.props.match.params.lang)
            this.getGoogleBooks()
        }
        
    }

    render() {
        return(
            <div>{ this.state.books.map((book, idx) => {
                return <ul key={idx}>
                        <li><h3>{book.volumeInfo.title}</h3></li>
                        <li><h5>{book.volumeInfo.authors}</h5></li>
                    </ul>
            }) }
            </div>
        );
    }
}

export default Card;