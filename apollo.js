import { ApolloClient, InMemoryCache } from "@apollo/client"

const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: GRAPHQL_API_URL,
})
