import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'

import withApolloClient from '../apollo'
import cacheRedirects from '../data/cacheRedirects'
import dataIdFromObject from '../data/dataIdFromObject'

class MyApp extends App {
	render () {
	  const {Component, pageProps, apolloClient} = this.props
	  return <Container>
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
	  </Container>
	}
}

export default withApolloClient(MyApp, { cacheRedirects, dataIdFromObject })

// https://reqres.in/
// https://novemberfive.co/blog/putting-apollo-client-to-rest-api-tutorial
// https://github.com/necccc/nextjs-apollo-graphql/blob/master/pages/_app.js