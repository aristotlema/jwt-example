import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const LoginForm = ({ loginUser }) => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();

    const onSubmit = (formValues) => {
        console.log('login attempt')
        loginUser(formValues);
    };

    return (
        <>
            <Typography variant="h3">Login</Typography>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <TextField label="User Name" {...register("userName")} />
                <TextField label="Password" {...register("passWord")} type="password"/>
                <Link to="/login/create">Create an account</Link>

                <Button type="submit" color="primary" variant="contained">Login</Button>
            </form>
        </>
    );
};

export default connect(
    null,
    { loginUser }
)(LoginForm);