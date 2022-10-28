import mongoose from "mongoose";
import { config } from "dotenv"

config()
const PORT = process.env.port || 8001
const mongodb = process.env.mongo_DB || ""
const mongoHost = process.env.mongo_HOST || 27017
export {PORT} 

export  const _connectDB = ()=>{
    const mongo_host = mongoHost;
    const mongo_db = mongodb;
    //const uri = `mongodb+srv://admin78:U6im5HgKD2lC1fky@clientes-data.mhx4gfz.mongodb.net/?retryWrites=true&w=majority`;
    const uri = `mongodb://localhost:${mongo_host}/${mongo_db}`;
    mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        ()=> {
            console.log("Conexion exitosa")
        },
        (err)=>{ console.log ("fail to connect -",err)}
    )
}
