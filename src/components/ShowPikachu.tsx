import { useQuery } from '@apollo/client'
import { Query } from "../@types/types"
import { searchPikachu } from '../graphql/queries'

export const ShowPikachu: React.FC = () => {
  // useQueryの型はQuery
  const { loading, error, data } = useQuery<Query>(searchPikachu)
  if (!data || !data.pokemon) return <>No Data</>
  if (loading) return <>"Loading..."</>
  if (error) return <>`Error! ${error.message}`</>
  let pokeData = data
  console.log(pokeData.pokemon)
  return (
    <div>
      <p>こちらはピカチュウ贔屓なデータです。</p>
      <div>{data?.pokemon?.number}</div>
    </div>
  )
}