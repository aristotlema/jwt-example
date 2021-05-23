import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { createUser } from '../../actions';
import { TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const CreateForm = ({ createUser }) => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();

    const onSubmit = (formValues) => {
        createUser(formValues);
    };

    return (
        <>
            <Typography variant="h3">Create an Account</Typography>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <TextField label="User Name" {...register("userName")} />
                <TextField label="Password" {...register("passWord")} type="password"/>
                <Typography>
                    Already have an account? <Link to="/">Sign in</Link>
                </Typography>

                <Button type="submit" color="primary" variant="contained">Submit</Button>
            </form>
        </>
    );
};

export default connect(
    null,
    { createUser }
)(CreateForm);