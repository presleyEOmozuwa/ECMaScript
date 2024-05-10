import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchlistItems } from './ItemlistService';

const ItemlistView = () => {

    const items = useSelector((state) => state.itemlist.items);

    const error = useSelector((state) => state.itemlist.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchlistItems());
    }, [dispatch]);

    if (error) {
        return (
            <p>This is the Status : {error}</p>
        )
    }
    return (
        <div>
            <h2>Item List Component</h2>
            {items?.map((item, index) => {
                return (
                    <div key={index}>
                        <p>Id : {item.id}</p>
                        <p>Name : {item.name}</p>
                        <p>Price : {item.price}</p>
                        <a href={`/item/${item.id}`} style={{ "textDecoration": "none", "padding": "2px 15px 2px 15px", "backgroundColor": "blue", "color": "white", "fontWeight": "bold" }}>Info</a>
                    </div>
                )
            })}

        </div>
    );

};

export default ItemlistView;