const express = require('express') ;
const server = express();
const despesas = require('./src/data/despesas.json')

server.get('/despesas', (req, res)=>{
   return res.json(despesas) 
});

server.listen(3000, () =>{
    console.log('Servidor está funcionando');
});

