import React from 'react'

import 'bulma/css/bulma.css'
import './Box.css'

const Box = (props) => {
    return (
        <div className="box box-dist is-12">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-128x128">
                        {/*<img src={props.bookInfo.volumeInfo.imageLinks.smallThumbnail} alt=""/>*/}
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{props.bookInfo.volumeInfo.title}</strong> <small>著者/{props.bookInfo.volumeInfo.authors}</small> <small>出版社/{props.bookInfo.volumeInfo.publisher}</small>
                            <br />
                            {props.bookInfo.volumeInfo.description}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Box;