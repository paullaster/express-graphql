const express = require('express');
const userData = require('./MOCK_DATA.json');
const app = express();

const port = 4545;



app.listen(port, () => {
    console.log('listening on port ' + port);
});

