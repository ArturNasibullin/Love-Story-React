import { ApolloClient, InMemoryCache } from '@apollo/client'
import { relayStylePagination } from '@apollo/client/utilities'

const appoloClient = new ApolloClient({
	uri: 'https://lovestory.eu.saleor.cloud/graphql/',

	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					products: relayStylePagination(),
				},
			},
		},
	}),
})

export default appoloClient
