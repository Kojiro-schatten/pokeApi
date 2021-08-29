import gql from "graphql-tag"

export const searchPikachu = gql`
  query searchPikachu {
    pokemon(name: "pikachu") {
      id
      number
      name
      image
      attacks {
        fast {
          name
          type
          damage
        }
      }
      evolutions {
        id
      }
      evolutionRequirements {
        amount
        name
      }
    }
  }
`

export const searchPokemon = gql`
  query searchPokemon($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      image
    }
  }
`