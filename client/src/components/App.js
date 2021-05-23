import React from 'react';
import { Router, Route } from 'react-router-dom';
import LoginForm from '../components/AuthForms/LoginForm';
import CreateFrom from '../components/AuthForms/CreateForm';
import HomePage from './HomePage';
import './App.scss';
import history from '../history';

const App = () => {
    return (
        <main>
            <Router history={history} >
                <div>
                    <Route path="/" exact component={LoginForm} />
                    <Route path="/login/create" exact component={CreateFrom} />
                    <Route path="/home" exact component={HomePage} />
                </div>
            </Router>
        </main>
    );
};

export default App;