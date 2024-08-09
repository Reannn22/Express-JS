// Import.package/library express
const express = require('express');

// Iniliazation application express.JS
const app = express();

const PORT = 4200;

const { UserController } = require('./controllers/user.controller');

// Parsing JSON body
app.use(express.json({limit: '50mb' }));

// Parsing URL-encoded data
app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 5000,
}));

const userController = new UserController(app)
userController.boot()

/**
 * Req adalah Request
 * Res adalah Response
 */
// app.get('/info', (req, res) => {
//     return res.status(200).send("Hello Alien");
// });

// app.get('/infos', (req, res) => {
//     return res.status(205).send("Hello Human");
// })

// app.get('/:id', (req, res) => {
//     return res.status(206).send(`Hello, World, from ${req.params.id}`);
// })

// app.post('/', (req, res) => {
//     return res.status(201).send("Ini adalah HTTP Method POST");
// })

// app.put('/', (req, res) => {
//     return res.status(202).send("Ini adalah HTTP Method PUT");
// })
// app.delete('/', (req, res) => {
//     return res.status(203).send("Ini adalah HTTP Method DELETE");
// })




app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});

