const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('WELCOME TO HRAPI');
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/emp',async(req,res)=>{
    try{
        const result = await pool.query('select * from employees');
        res.json(result.rows);
    

    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/empCount',async(req,res)=>{
    try{
        const result = await pool.query('select Count(*) from employees');
        res.json(result.rows);
    

    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/dpt',async(req,res)=>{
    try{
        const result = await pool.query('select Count(*) from departments');
        res.json(result.rows);
    

    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/region',async(req,res)=>{
    try{
        const result = await pool.query('select Count(*) from regions');
        res.json(result.rows);
    

    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/country',async(req,res)=>{
    try{
        const result = await pool.query('select Count(*) from countrys');
        res.json(result.rows);
    

    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalemp',async(req,res)=>{
    try{
        const result = await pool.query('select Count(employee_id) from employees');
        res.json(result.rows);
    

    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connect Successfully...on PORT ${PORT}`);
});