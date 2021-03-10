import 'reflect-metadata'
import './config'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { CatalogResolver } from './resolvers'
import { buildSchema } from 'type-graphql'

async function main (): Promise<void> {
  const app = express()
  const schema = await buildSchema({
    resolvers: [CatalogResolver],
    emitSchemaFile: true
  })
  const server = new ApolloServer({ schema })

  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () => console.log('Server ready'))
}

main().catch(() => console.log('Application exited!'))
