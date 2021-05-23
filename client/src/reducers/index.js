import { combineReducers } from 'redux';

const usersReducer = (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            return state;
        case 'LOGIN_USER':
            return state;
        default:
            return state;
    }
};

export default combineReducers({
    users: usersReducer
});