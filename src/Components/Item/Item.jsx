import React from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import Card from "react-bootstrap/Card";

const agregarItem = (items) => {
    console.log(`compraste ${items} unidades`);
};
const Item = ({ info }) => {
    return (

        <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={info.image} alt="" />
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>
<Card.Text>{info.origen}</Card.Text>
                <ItemCount initial={1} stock={10} onAdd={agregarItem} />
            </Card.Body>
        </Card>
        
    );
};

export default Item;