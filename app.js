const express = require('express');
const app = express();

const port = 4545;

app.listen(port, () => {
    console.log('listening on port ' + port);
});

