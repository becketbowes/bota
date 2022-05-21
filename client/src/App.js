
import Head from './components/head/index';
//need to fix Toe
//import Toe from './components/toe/toenav';
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({ uri: '/graphql' });

// const authLink = setContext((_, { headers }) => {
//   const toke = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers, 
//       authorization: toke ? `Bearer ${id_token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });

function App() {

    return (
      <>
      {/* <ApolloProvider client={client}> */}
          <Head></Head>
          {/*<Toe></Toe>*/}
      {/* </ApolloProvider> */}
      </>
    );
  
  }

export default App;
