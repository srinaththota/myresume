
//import { onError } from "apollo-link-error";

import { ApolloClient ,
HttpLink,
//ApolloLink,
WebSocketLink,
  } from '@apollo/client';

import { cache } from '../localstore';


const webSocketUrl = process.env.WEBSOCKET_API_URL;

const httpUrl = process.env.REACT_APP_URL + '/graphql'

//TODO: graphql http and ws urls from config
const httpLink = new HttpLink({
  uri: httpUrl
});

const wsLink =
  webSocketUrl &&
  new WebSocketLink({
    uri: webSocketUrl,
    options: { reconnect: true }
  });
//it is declared but never used
/*
const errorLink = onError(
  ({ operation, response, graphQLErrors, networkError }) => {
    console.log(
      "Apollo error:",
      operation,
      response,
      graphQLErrors,
      networkError
    );
    if (operation.operationName === "IgnoreErrorsQuery") {
      response.errors = null;
    }
  }
);
*/

const usedLinks = [httpLink];
if (webSocketUrl) usedLinks.push(wsLink);


const client = new ApolloClient({
  connectToDevTools: true,
  link: httpLink,
  cache
});

export default client;
