import {ApolloClient, InMemoryCache} from "@apollo/client";
import {DateTime} from "luxon";

function component() {
  const client = new ApolloClient({
    uri: 'https://example.com/',
    cache: new InMemoryCache(),
  });
  const now = DateTime.now();
  client.query({query: ''}).then(() => console.log('test'));
  const element = document.createElement('div');
  element.textContent = now.toISODate();
  return element;
}

document.body.appendChild(component());