import express, { Request, Response } from 'express'; 

import { sendMessage, } from "@/services/messageServices";
import { getMessageHistory } from "@/services/messageServices";
const router =express.Router();
 router.post('/send-message' ,async (req:Request,res:Response)=>{
    try{
        const results = await sendMessage(req.body);
        res.status(200).json(res)
    }
 })