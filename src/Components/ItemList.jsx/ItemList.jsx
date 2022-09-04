import Item from "../Item/Item.jsx";
import React from "react";

const ItemList = ({ data = [] }) => {
    return data.map((cervezas) => <Item key={cervezas.id} info={cervezas} />);
};

export default ItemList;