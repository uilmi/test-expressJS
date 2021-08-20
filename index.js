const express = require('express');
const app = express();

const port = 3000;


function helloWorld(req, res) {
    return res.send('Hello World!');
}

function onRun() {
    console.log(`Server is running on http://localhost:${port}`);
}

// app.get('/', helloWorld);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.get('/login', (req, res) => {
    res.send('login page!');
})

// app.listen(port, onRun);

app.listen(port, () => {
    console.log(`example app listening at htpp://localhost:${port}`);
})