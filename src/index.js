import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  { GlobalStyle } from './global'
import { ApolloProvider } from '@apollo/client';
import client from './lib/apollo'
ReactDOM.render(
<ApolloProvider client={client}>
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
