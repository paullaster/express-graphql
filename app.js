const express = require('express');
const userData = require('./MOCK_DATA.json');
const graphql, {GraphQLSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const app = express();

const port = 4545;

const schema = new GraphQLSchema({
    queries:,
    mutations:,
}),

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

app.listen(port, () => {
    console.log('listening on port ' + port);
});

