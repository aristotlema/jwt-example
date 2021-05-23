import userAuth from '../apis/userAuth';
import history from '../history';

export const createUser = (formValues) => async dispatch => {
    const response = await userAuth.post('/user', { ...formValues });
    dispatch({ type: 'CREATE_USER', payload: response.data });
    history.push('/');
};

export const loginUser = (formValues) => async dispatch => {
    const response = await userAuth.post('/user/login', { ...formValues });
    dispatch({ type: 'LOGIN_USER', payload: response.data });  
    if(response.data === "Success") {
        history.push('/home');
    }
};