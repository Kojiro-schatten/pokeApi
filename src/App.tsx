import React, { useState } from 'react';
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "./graphql/client"
import { SearchResultField } from "./components/SearchResultField"
import { SearchForm } from './components/SearchForm';

function App() {
  const [pokemonName, setpokemonName] = useState("")
  return (
    // ApolloProviderで括ることで、どのコンポーネントからもGraphQLのquery,mutationを実行することができるようになる
    <>
      <SearchForm setpokemonName={setpokemonName}></SearchForm>
      <ApolloProvider client={apolloClient}>
        {pokemonName && <SearchResultField pokemonName={pokemonName} />}
      </ApolloProvider>
    </>
  );
}

export default App;
