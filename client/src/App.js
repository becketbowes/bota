import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Head from './components/head/index';
import Toe from './components/toe';

//establish a new link to the GraphQL server
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

//instantiate the Apollo Client instance and create the connection to the API endpoint
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {

    return (
      <ApolloProvider client={client}>
      <>
          <Head></Head>
          <Toe></Toe>
      </>
      </ApolloProvider>
    );
  
  }

export default App;
