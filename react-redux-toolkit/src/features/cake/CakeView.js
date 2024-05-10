import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

const orderCake = {
    color: 'blue',
    marginRight: '8px'
}
const restockCake = {
    color: 'red',
}

const CakeView = () => {
    const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Number of Cakes: {numberOfCakes}</h3>
            <button onClick={() => dispatch(ordered())} style={orderCake}>Order cake</button>
            <button onClick={() => dispatch(restocked(2))} style={restockCake}>Restock cake</button>
        </div>
    );
};

export default CakeView;