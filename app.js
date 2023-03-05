const express = require('express');
const userData = require('./MOCK_DATA.json');
const graphql, {GraphQLObjectType, GraphQLSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const app = express();

const port = 4545;

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields:{

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

