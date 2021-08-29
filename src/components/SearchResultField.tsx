import { useQuery } from "@apollo/client"
import { Query } from "../@types/types"
import { searchPokemon } from "../graphql/queries"

type Proptype = {
  pokemonName: string
}

const SearchResultField: React.FC<Proptype> = ({ pokemonName }) =>  {
  //apolloが用意してるhooks。通信の状況に応じて、loading, error, dataの値が変わる
  const { loading, error, data } = useQuery<Query>(searchPokemon, { variables: { name: pokemonName } })
  if (!pokemonName) return <></>
  if (!data || !data.pokemon) return <>No Data</>
  if (loading) return <>"Loading..."</>
  if (error) return <>`Error! ${error.message}`</>
  return (
    <div>
      <div>No: {data?.pokemon?.number}</div>
      <div>Name: {data?.pokemon?.name}</div>
      {data?.pokemon?.image ? (
          <img src={data?.pokemon?.image} alt={data?.pokemon?.name ?? ""} />
      ) : (
          <div>no image.</div>
      )}
    </div>
  )
}
export { SearchResultField }