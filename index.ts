import bodyParser from 'body-parser';
import { application } from 'express';
import mongoose from 'mongoose';
import Server from './classes/server';
import defaultRoutes from './routes/defaul.routes';
import personajeRoutes from './routes/personajes.routes';


// mi importacion 




// miio 
const cors = require('cors');
const server = new Server();

// mio
server.app.use(cors())

server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended:true}));

server.app.use('/',defaultRoutes);

//cambie nomber
server.app.use('/suplementos',personajeRoutes);



mongoose.connect('mongodb+srv://usr_suplementos:suplementos2022@cluster0.ygbiyzd.mongodb.net/superProteinDb',(error)=>{
    if(error){
        throw error;
    }

    console.log('Base de datos online');

})

server.Start(()=>{
    console.log(`funcionando en puerto ${server.port}`);


})