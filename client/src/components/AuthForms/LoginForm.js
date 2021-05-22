import React from 'react';
import { useForm } from 'react-hook-form';


const LoginForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="userName">User Name</label>
            <input {...register("userName")} />
            <label htmlFor="passWord">Password</label>
            <input {...register("passWord")} type="password"/>
            <input type="submit" />
        </form>
    );
};

export default LoginForm;