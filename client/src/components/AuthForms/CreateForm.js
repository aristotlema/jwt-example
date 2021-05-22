import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CreateForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <h2>Creat an Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="userName">User Name</label>
                <input {...register("userName")} />
                <label htmlFor="passWord">password</label>
                <input {...register("passWord")} type="password"/>
                <p>
                    Already have an account? <Link to="/">Sign in</Link>
                </p>

                <input type="submit" />
            </form>
        </>
    );
};

export default CreateForm