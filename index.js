const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')
const {ApolloServerPluginLandingPageGraphQLPlayground}=require('apollo-server-core')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

// Connection DB
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(URI)

const server = new ApolloServer({typeDefs,resolvers,plugins:[ApolloServerPluginLandingPageGraphQLPlayground]})
server.listen().then(({url})=>{
    console.log('Server Start at: ',url);
}).catch(err=>{
    console.error('ERR',err);
})