import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, {FirebaseContext} from "./components/Firebase";
import PortfolioManager from "./components/PortfolioManager";


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <PortfolioManager/>
    </FirebaseContext.Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
