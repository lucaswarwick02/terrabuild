import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Builds from './Builds';
import '../css/Header.css';

function Header() {

    const homeClick = () => {
        ReactDOM.render(<Home />, document.getElementById("content"));
    }

    const buildClick = () => {
        ReactDOM.render(<Builds />, document.getElementById("content"));
    };

    return (
        <div id="header">
            <ul>
                <li><span onClick={homeClick} >Home</span></li>
                <li><span onClick={buildClick} >Builds</span></li>
            </ul>
        </div>
    );
}

export default Header;