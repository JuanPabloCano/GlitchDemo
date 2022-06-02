const express = require('express');
const app = express();

const port = 8080;
let visitas = 0;


app.listen(port, (error) => {
    if (error) {
        console.log(`Hubo un error: ${error}`);
    } else {
        console.log('Servidor iniciado en el puerto', port);
    }
})

app.get('/', (req, res) => {
    visitas++;
    res.send('<h1 style="color:blue">Bienvenido</h1>');
})

app.get('/visitas', (req, res) => {
    visitas++;
    res.send(`La cantidad de visitas es ${visitas}`);
})

app.get('/fyh', (req, res) => {
    visitas++;
    const date = new Date().toLocaleString();
    res.send(`Fecha actual: ${date}`);
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log('Id:', id);
    res.send(`Bienvenido al usuario con ID: ${id}`);
})

app.use((req, res, next) => {
    visitas++;
    next();
})
