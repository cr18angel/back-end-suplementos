import { Request, Response, Router } from 'express';
import { Personaje} from '../models/personaje.model';

const personajeRoutes = Router();


personajeRoutes.get('/',async(req:Request,res:Response)=>{
     const request = req.body;
     console.log(request);

    const personajes = await Personaje.find();



    return res.json({
        ok: true,
        personajes

    })
})

// nuevo mpoint 39:43

personajeRoutes.get('/paging',async (req:Request,res:Response)=>{



    let perPage= 5;
    let page = Number(req.query.page) || 1 ;
    let skip = page-1;
    skip = skip*perPage;



    const personajes = await Personaje.find().skip(skip).limit(perPage);


    return res.json({
        ok: true,
        personajes
    })
});


personajeRoutes.post('/', (req:Request, res:Response)=>{
    const body = req.body;

    const personaje = {
        nombre:body.nombre,
        nombreReal:body.nombreReal,
        Categoria:body.Categoria,
        imagen:body.imagen
    }


Personaje.create(personaje).then(personajeDb => {
    return res.json({
        ok:true,
        personajeDb
    })
}).catch(err=>{
    return res.json({
        ok:false,
        err
    })



    })


});

// mandar 

personajeRoutes.put('/:id', (req:Request, res:Response)=>{

    const personajeId = req.params.id;
    const body = req.body;

    const personaje = {
        nombre:body.nombre,
        nombreReal:body.nombreReal,
        Categoria:body.Categoria,
        imagen:body.imagen
    } 


    // metodo que da una promesa 

    Personaje.findByIdAndUpdate(personajeId,personaje).then(personajeDb=>{
        

        return res.json({
            ok: true,
            personajeDb
        })

    })
});


personajeRoutes.delete('/',async (req:Request,res:Response)=>{
    const personajeId = req.query.id;

    if(!personajeId){

        return res.json({
            ok:false,
            msj: "El registro solicitado no existe"
      })
        
    }

    // const personajeDb = await Personaje.findById(personajeId);

    // if(personajeDb){
    //     return res.json({
    //         ok:false,
    //         msj: "El registro solicitado no existe"
    //   })
    // }





    Personaje.findByIdAndDelete(personajeId).then(personaje=>{
        return res.json({
            ok:true,
            msj: "Eliminado correctamente"
      })

    }).catch(err=>{
        return res.json({
            ok:false,
            msj: "El registro solicitado no existe"
      })

    })


    // console.log(personajeId);


 
})

export default personajeRoutes