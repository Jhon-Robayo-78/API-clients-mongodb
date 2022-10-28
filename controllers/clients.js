import { v4 as uuidv4 } from 'uuid';
import mongoose from "mongoose";
const dataClients = mongoose.model('dataClients',{
    id: Number,
    nombre: String,
    apellido:String,
    numero: Number,
    correo: String,
    status: false,
    password:String
})

export const getClients = (req, res) => {   
    dataClients.find({},'id nombre apellido numero correo status password').then(
        doc =>{
            res.json({message:'success',doc})
        }
    ).catch(err=>{    
        console.log(err.message)
        res.json({message:'failed'})
    })
};

export const getClient = (req, res) => {
    const { id } = req.params;
    dataClients.find({id},'id nombre apellido numero correo status password').then(
        doc =>{
            res.json({message:'success',data:doc[0]})
        }
    ).catch(err=>{
        console.log(err.message)
        res.json({message:'failed'})
    })
};

export const createClient = (req, res) => {

    const client = new dataClients({
        id: req.body.id,
        nombre: req.body.nombre,
        apellido:req.body.apellido,
        numero: req.body.number,
        correo: req.body.correo,
        status: false,
        password:req.body.password
    })
   
    client.save().then(
        (doc)=>{
            console.log(`Usuario con id: ${client.id} creado`,doc);
            res.json({response:'success'})        
        }
    )
};

export const deleteClient = (req, res) => {
    const { id } = req.params;
    dataClients.findByIdAndDelete({_id:id})
    .then(
        res.json({response:'success'})
    )
    .catch(
        err => {
            console.log('error para eliminar',err);
            res.json({message:'failed'})
        })    
};

export const updateClient = (req, res) => {
    const { id } = req.params;
    dataClients.findByIdAndUpdate({_id:id},{$set:{
        nombre: req.body.nombre,
        apellido:req.body.apellido,
        numero: req.body.number,
        correo: req.body.correo,
        status: false,
        password:req.body.password
    }}).then(
        doc =>{
            res.json({message:'success'})
        }
    ).catch(
        err=>{
            console.log('Error al actualizar',err.message)
            res.json({message:'failed to update'})
        })
};

export const login = (req,res)=>{
    const { correo, password } = req.body;
    if (!correo) return res.status(200).send({success:false, message:'no se digito email'})
    if (!password) return res.status(200).send({success:false, message:'no se digito password'})
    dataClients.find({correo:correo, password:password}).then(
        doc =>{
            res.json({message:'success',data:doc[0]})
        }
    ).catch(err=>{
        console.log(err.message)
        res.json({message:'failed'})
    })

}