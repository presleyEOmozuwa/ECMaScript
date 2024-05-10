import React from 'react';
import { fnameaction, lnameaction, genderaction } from './authorSlice';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './AuthorService';

const AuthorView = () => {
    const dispatch = useDispatch();
    const temp = useSelector((state) => state.author);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            firstname: temp.firstname,
            lastname: temp.lastname,
            gender: temp.gender
        }
        console.log(payload);
        dispatch(registerUser("http://localhost:5000/api/creator", payload));
    }

    return (
        <div>
            <h2>Author Component</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstname" onChange={(e) => dispatch(fnameaction(e.target.value))}/>

                <input type="text" name="firstname" onChange={(e) => dispatch(lnameaction(e.target.value))}/>

                <input type="text" name="firstname" onChange={(e) => dispatch(genderaction(e.target.value))}/>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default AuthorView;