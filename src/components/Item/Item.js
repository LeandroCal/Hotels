import React from 'react';
import './Item.scss';

const Item = ({item}) => {
    const { name } = item;
    
    return (
        <div className="item">
            {name}
        </div>
    );
};

export default Item;