import React from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';

const ItemListContainer = (props) => {
    return (
        <div className="ItemListContainer">
            <ItemCount stock ='5' initial ='1'/> 
        </div>
         
    )
}

export default ItemListContainer