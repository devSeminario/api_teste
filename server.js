const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

const port = 3000;

app.listen(port, () => {
    console.log ("Started on port 3000");
})