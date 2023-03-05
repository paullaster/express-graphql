const express = require('express');
const userData = require('./MOCK_DATA.json');
const graphql = require('graphql');
const {
    GraphQLObjectType, 
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = graphql;
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
    name: 'RootQueryType',
    fields:{
        getAllUsers: {
            type: new GraphQLList(USerType),
            args: {

            },
            resolve(parent, args){
                return userData;
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: USerType,
            args: {
                first_name: {type: GraphQLString},
                last_name: {type: GraphQLString},
                email: {type: GraphQLString},
                gender: {type: GraphQLString},
                ip_address:{type: GraphQLString}
            },
            resolve(parent, args){
                userData.push( {
                    id: userData.length + 1,
                    first_name: args.first_name,
                    last_name: args.last_name,
                    email: args.email,
                    gender: args.gender,
                    ip_address: args.ip_address
                });
                return args;
            }
        }
    }
})

const schema = new GraphQLSchema({
    queries:RootQuery,
    mutations:Mutation,
});

const root = {
    hello: () => {
        return "Hello world!, Graphql";
    }
}

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(port, () => {
    console.log('listening on port ' + port);
});

