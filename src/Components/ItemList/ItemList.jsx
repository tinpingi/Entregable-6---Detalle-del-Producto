import Item from "../Item/Item";
import React from "react";

const ItemList = ({ data = [] }) => {
    let listaDeItems = data.map((cervezas) => (
        <Item key={cervezas.id} info={cervezas} />
    ));
    return (
        <div className="d-flex -2 justify-content-around">{listaDeItems}</div>
    );
};

export default ItemList;