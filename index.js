const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')
const {ApolloServerPluginLandingPageGraphQLPlayground}=require('apollo-server-core')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

// Connection DB
mongoose.connect('mongodb+srv://test:test123@cluster0.kd5z5.mongodb.net/learn_graphql?retryWrites=true&w=majority')

const server = new ApolloServer({typeDefs,resolvers,plugins:[ApolloServerPluginLandingPageGraphQLPlayground]})
server.listen().then(({url})=>{
    console.log('Server Start at: ',url);
}).catch(err=>{
    console.error('ERR',err);
})