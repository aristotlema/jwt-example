import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const LoginForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="userName">User Name</label>
                <input {...register("userName")} />
                <label htmlFor="passWord">Password</label>
                <input {...register("passWord")} type="password"/>
                <Link to="/login/create">Create an account</Link>

                <input type="submit" />
            </form>
        </>
    );
};

export default LoginForm;