import React from 'react';
import Card from '../../components/Card';
import './Grid.css';

import data from '../../data/data';

const Grid = () => {
    const cards = data.map(card => (
        <Card
          key={card.id}
          thumbnail={card.thumbnail_image}
          programme={card.programme.name}
          avatar={card.owner.avatar}
          title={card.title}
          summary={card.summary}
          product={card.product_type_name}
        />
    ));

    return (
        <div className="grid">
            {cards}
        </div>
    );
};

export default Grid;
