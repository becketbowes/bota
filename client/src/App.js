
import Head from './components/head/index';
import Toe from './components/toe';
import Admin from './components/admin';


// const client = new ApolloClient({
//   uri: 'https://http://localhost:3001//graphql',
//   cache: new InMemoryCache()
// });

// client  
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

// const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache()
// });

function App() {

    return (
      <>
      {/* <ApolloProvider client={client}> */}
          <Head></Head>
          <Admin></Admin>
          <Toe></Toe>
      {/* </ApolloProvider> */}
      </>
    );
  
  }

export default App;
