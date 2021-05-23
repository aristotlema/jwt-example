import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { createUser } from '../../actions';

const CreateForm = ({ createUser }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (formValues) => {
        createUser(formValues);
    };

    return (
        <>
            <h2>Create an Account</h2>
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

export default connect(
    null,
    { createUser }
)(CreateForm);