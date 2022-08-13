import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
	query ProductCollection($first: Int = 100, $after: String) {
		products(first: $first, channel: "default-channel", after: $after) {
			edges {
				node {
					id
					name
					slug
					thumbnail {
						url
					}
					category {
						name
					}
					pricing {
						priceRange {
							start {
								gross {
									amount
								}
							}
							stop {
								gross {
									amount
								}
							}
						}
					}
				}
			}
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
				endCursor
			}
			totalCount
		}
	}
`
