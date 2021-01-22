const express = require('express');
const server = express();
var cors = require('cors');
server.use(cors());
server.use(express.json());


server.listen(3000, function () {
    console.log('El servidor express corre en el puerto 3000');
});

let users = [];


server.post('/users/', validarMail, function (req,res){
    users.push({
        /* id: req.body.id, */
        nombre:req.body.nombre, 
        apellido:req.body.apellido, 
        correo: req.body.correo/* .toLowerCase() */,
    });
    res.status(200).json('Usuario creado exitosamente');
});

server.get('/users', function (req,res){
    res.status(200).json(users);
});


function validarMail(req, res, next) {
    let correo = req.body.correo.toLowerCase();
    let existe = users.find(element => element.correo == correo);
    if (correo.includes('gmail') || correo.includes('yahoo') || correo.includes('hotmail') == true ) {
        res.status(400).json('El correo no debe ser gmail, yahoo o hotmail');
    }else {
    if (existe) {
        res.status(402).json('El correo ingresado ya existe');
    }else{
        return next();
}}};