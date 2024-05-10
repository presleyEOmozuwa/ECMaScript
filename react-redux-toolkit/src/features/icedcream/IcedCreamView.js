import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderIcedCream, restockIcedCream } from './icedCreamSlice';

const icedCreamStyle = {
    color: 'blue',
    marginRight: '8px'
}
const restockStyle = {
    color: 'red',
}
const inputStyle = {
    marginRight: '8px',
    textAlign: 'center'
}

const IcedCreamView = () => {
    const numberOfIcedCream = useSelector((state) => state.icedCream.numberOfIcedCream);
    const dispatch = useDispatch();
    const [val, setVal] = useState();
    return (
        <div>
            <h3>Number of IcedCream: {numberOfIcedCream}</h3>
            <button onClick={() => dispatch(orderIcedCream())} style={icedCreamStyle}>Order icedcream</button>
            <input  onChange={(event) => setVal(parseInt(event.target.value))} style={inputStyle} type="text" value={val} placeholder="enter a number"></input>
            <button onClick={() => dispatch(restockIcedCream(val))} style={restockStyle}>Restock icedcream</button>
        </div>
    );
};

export default IcedCreamView;