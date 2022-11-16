const express = require('express') ;
const server = express();
const port = process.env.PORT || 3000


const despesas = require('./src/data/despesas.json')


server.get('/despesas', (req, res)=>{
   return res.json(despesas) 
});

server.listen(port, () =>{
    console.log('Servidor está funcionando...');
});

