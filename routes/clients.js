import express from "express";
import { 
    createClient, 
    getClient, 
    getClients,
    deleteClient,
    updateClient,
    login
} from "../controllers/clients.js";

const router = express.Router();

// all routes here start with /clients
router.get('/', getClients)

router.post('/', createClient);

router.get('/:id', getClient);

router.delete('/:id', deleteClient);

router.put('/:id', updateClient);

router.post('/login',login)

export default router;