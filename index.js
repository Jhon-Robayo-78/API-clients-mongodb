import express from "express";
import bodyParser from "body-parser";
import clientRoutes from "./routes/clients.js";
import { PORT, _connectDB } from "./controllers/db.js";

_connectDB()
const app = express();

app.use(bodyParser.json());

app.use('/clients', clientRoutes);

app.listen(
    PORT,
    () => console.log(`API live on port http://localhost:${PORT}`)
)

app.get('/', (req, res) => res.send('Hello from my api homepage'));

app.use((req,res)=>{
    res.status(404).send({"status":"Error 404"}) 
})