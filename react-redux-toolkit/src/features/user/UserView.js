import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../user/userSlice';

const userStyle = {
    color: 'green'
}
const UserView = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    
    return (
        <div>
            <h3 style={userStyle}>List of Users: </h3>
            {user.users.map((user) => {
                console.log(user.users);
                return (
                    <div key={user.id}>
                        <p>First Name: {user.name}</p>
                        <p>User Name: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default UserView;