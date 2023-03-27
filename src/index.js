import {ApolloClient, InMemoryCache} from "@apollo/client";

function component() {
  const client = new ApolloClient({
    uri: 'https://example.com/',
    cache: new InMemoryCache(),
  });
  client.query({query: ''}).then(() => console.log('test'));
  const element = document.createElement('div');
  return element;
}

document.body.appendChild(component());