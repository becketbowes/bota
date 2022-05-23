import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client'

// const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

// function App() {
//   return (
//     <div>
//       <h2>Apollo App</h2>
//     </div>
//   );
// }

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);