import React, { PropTypes } from 'react';
import './Card.css';

const Card = ({ thumbnail, programme, avatar, title, summary, product }) => (
    <div className="card">
        <img src={thumbnail} />
        <div>
            <span className="card-programme">{programme}</span>
            <div className="card-content">
                <img src={avatar} />
                <h2>{title}</h2>
                <p>{summary}</p>
            </div>
            <span className="card-product">{product}</span>
        </div>
    </div>
);

Card.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    programme: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
}

export default Card;
