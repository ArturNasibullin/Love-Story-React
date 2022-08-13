import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'

import './index.css'
import './styles/style.sass'

import appoloClient from './lib/appoloClient'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<ApolloProvider client={appoloClient}>
		<App />
	</ApolloProvider>
)
