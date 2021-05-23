import userAuth from '../apis/userAuth';
import history from '../history';

export const createUser = (formValues) => async dispatch => {
    const response = await userAuth.post('/user', { ...formValues });
    dispatch({ type: 'CREATE_USER', payload: response.data });
    history.push('/');
};