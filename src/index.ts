import 'reflect-metadata'
import './config'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { buildSchema } from 'type-graphql'

async function main (): Promise<void> {
  const app = express()
  const schema = await buildSchema({
    resolvers: [__dirname + '/resolvers/**/*.{ts, js}'],
    emitSchemaFile: true
  })
  const server = new ApolloServer({ schema })

  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 GraphQL server ready at http://localhost:4000${server.graphqlPath}`
    )
  )
}

main().catch(error => {
  console.log(JSON.stringify(error))
  console.log('Application exited!')
})
