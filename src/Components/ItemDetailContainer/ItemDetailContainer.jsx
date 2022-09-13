import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail.jsx";


const ItemDetailContainter = () => {
    const [itemDetail, setData] = useState({});

    useEffect(() => {
        fetch("./cervezas.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    return <ItemDetail item={itemDetail} />;
};
export default ItemDetailContainter;