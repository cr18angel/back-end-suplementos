import { Document, model, Schema } from "mongoose";



const personajeSchema = new Schema({
    nombre:{
        type : String,
        require : [true, 'El nombre es requerdio']
    },
    nombreReal:{
        type : String
    },
    Categoria:{
        type: String
    },

    imagen:{
        type: String,
        require : [true, 'El nombre es requerido']
    }
});

interface IPersonaje extends Document{
    nombre:string;
    nombreReal:string;
    Categoria:string;
    imagen: string;
}


export const Personaje = model<IPersonaje>('Personaje',personajeSchema);