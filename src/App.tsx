import React, { useState } from 'react';
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "./graphql/client"
import { SearchResultField } from "./components/SearchResultField"
import { SearchForm } from './components/SearchForm'
import { ShowPikachu } from './components/ShowPikachu'

function App() {
  const [pokemonName, setpokemonName] = useState("")
  return (
    // ApolloProviderで括ることで、どのコンポーネントからもGraphQLのquery,mutationを実行することができるようになる
    <>
      <SearchForm setpokemonName={setpokemonName}></SearchForm>
      <ApolloProvider client={apolloClient}>
        {pokemonName && <SearchResultField pokemonName={pokemonName} />}
        <ShowPikachu />
      </ApolloProvider>
    </>
  );
}

export default App;
