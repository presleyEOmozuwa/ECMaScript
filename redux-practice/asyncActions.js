const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios/dist/node/axios.cjs')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS = 'FETCH_USERS_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response);
                const users = response.data.map((user) => user.id)
                dispatch(fetchUserSuccess(users))
            }).catch((error) => {
                console.log(error);
                dispatch(fetchUsersFailure(error.message))
            });
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''

            }
        case FETCH_DATA_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => { console.log(store.getState()) });
store.dispatch(fetchUsers());