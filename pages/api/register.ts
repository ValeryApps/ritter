import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'
import prisma from '../../libs/prismadb'

const handler = async(req:NextApiRequest, res:NextApiResponse)=>{
 if(req.method !== 'POST'){
    return res.status(405).end();
 }
 try {
    const {name, username, email, password} = req.body;
   
    
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
        data:{
            name, username, email, hashedPassword
        }
    });
    return res.status(200).json(user)
 } catch (error:any) {
    console.log(error.message);
    return res.status(400).end();
 }
}
export default handler