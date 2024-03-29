import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import ApolloClient from 'apollo-boost';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql',
});

ReactDOM.render((
  <App client={client} />
), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
