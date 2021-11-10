import React from "react";
import Card from '../card/Card';

const CardsList = (props) => {
    return (
        <ul className="results__list">
            {
                props.cards.map(item => (
                    <Card key={item.card_id} card={item}/>
                ))
            }
        </ul>
    );
};

export default CardsList;
