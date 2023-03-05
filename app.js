const express = require('express');
const userData = require('./MOCK_DATA.json');
const graphql = require('graphql');
const {
    GraphQLObjectType, 
    GraphQLSchema,
    GraphQLInt,
    GraphQLString
} = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const app = express();

const port = 4545;

const USerType = new GraphQLObjectType({
    name: 'User',
    fields:() => ({
        id: {type: GraphQLInt},
        first_name: {type: GraphQLString},
        last_name: {type: GraphQLString},
        emai: {type: GraphQLString},
        gender: {type: GraphQLString},
        ip_address: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields:{
        getAllUsers: {
            typ
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {

    }
})

const schema = new GraphQLSchema({
    queries:RootQuery,
    mutations:Mutation,
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

app.listen(port, () => {
    console.log('listening on port ' + port);
});

