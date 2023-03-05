const express = require('express');
const userData = require('./MOCK_DATA.json');
const graphql = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const app = express();

const port = 4545;



app.listen(port, () => {
    console.log('listening on port ' + port);
});

