import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
mongoose
.connect(process.env.MONGO) // for mongoose database
.then( () => {
    console.log('MongoDb is connected');
})
.catch(err =>{
    console.log(err);
});

const app=express();

app.use(express.json());  //for signup(in the insomnia) for testing api

app.listen(3000, ()=> {
    console.log('Server is running on port 3000 !');
});

app.use('/api/user',userRoutes);  //checking api

app.use('/api/auth',authRoutes);  //signup api