import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { ShowProduct } from './showProduct';


const httpLink = createHttpLink({
  uri: "http://localhost:3000",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});



export const App: React.FC = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <ShowProduct />
      </ApolloProvider>
    </>
  );
}