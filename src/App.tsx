import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {BrowserRouter as Router, Link, Route, Routes,} from "react-router-dom";
import Other from "./Other";

function App() {

    const [message, setMessage] = useState();

    useEffect(() => {
        // axios.get('http://localhost:8080/pub/test')
        axios.get('https://shark-app-cttp3.ondigitalocean.app/pub/test')
            .then(response => {
                setMessage(response.data);
                console.error(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/other" element={<Other/>}></Route>

                </Routes>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    Message from the backend : {message}

                    <Link to='/other'>
                        <button>Other</button>
                    </Link>
                </header>
            </Router>
        </div>
    );
}

export default App;
