import {ApolloServer} from 'apollo-server-express'
import cookieparser from 'cookie-parser'

import cors from 'cors'
import express from 'express'


import accessEnv from '#root/helpers/accessEnv'

import resolvers from '#root/graphql/resolvers'
import typeDefs from '#root/graphql/typeDefs'


const port = accessEnv("PORT", 7000)

const apolloServer  = new ApolloServer({
    resolvers,
    typeDefs
})

const app  = express()

app.use(cookieparser())
app.use(cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
}))

apolloServer.applyMiddleware({app, cors: false, path: '/graphql'})

app.listen(port, "0.0.0.0", () => {
    console.info(`Api gateway listing on port: ${port}`)
})