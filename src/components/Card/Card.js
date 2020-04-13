import React, {Component} from 'react';

class Card extends Component {
    state = {books: []}

    componentDidMount() {
        console.log(this.props.match.params.lang)
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

    componentDidUpdate() {
        console.log(this.props.match.params.lang)
    }

    render() {
        var urlPass = this.props.match.params.lang

        return(
            <div>{urlPass}完全に理解した</div>
        );
    }
}

export default Card;