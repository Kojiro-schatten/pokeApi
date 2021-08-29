import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  // cacheを設定することで、同じクエリが発行された際、自動的にキャッシュから結果を返却してくれるのでパフォーマンス向上につながる
  cache: new InMemoryCache(),
})

export { apolloClient }
