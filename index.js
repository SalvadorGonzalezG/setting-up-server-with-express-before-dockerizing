const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) =>{
    res.send('Welcome to my backEnd :D \u{1F308}')
});

app.listen(port, ()=>{
    console.log(`Servidor Escuchando en el http://localhost:${port}`)
})

