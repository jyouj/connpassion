import React, {Component} from 'react';

class Card extends Component {
    componentDidMount() {
        console.log(this.props.match.params.lang)
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