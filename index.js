const express = require('express');
const mongoose = require('mongoose');
const EmployeeSchema = require('./modules/Employee.js');
const cors = require("cors");
const config = require("config");
const db = config.get("mongoURI");

const app = express();   // web framework for Nodejs
app.use(express.json()); // to get json information
app.use(cors());

mongoose.connect(db,{
    useNewUrlParser:true,
})

app.post('/insert',async(req,res)=>{
    const EmployeeName = req.body.Name;
    const EmployeeCity = req.body.City;
    const EmployeeStatus = req.body.Status;
    const EmployeeRole = req.body.Role;
    const EmployeeNumber = req.body.Number;
    const Employee = new EmployeeSchema({Name:EmployeeName,City:EmployeeCity,Role:EmployeeRole,Number:EmployeeNumber});
    try {
        const store = await Employee.save();
        res.send(store);
    } catch (error) {
        console.log(error);
    }
})

app.get('/read',(req,res)=>{
    EmployeeSchema.find({},(err,result)=>{
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
})
app.put('/update',(req,res)=>{
    const id = req.body.id;
    const Status = req.body.Status;
    try{
        EmployeeSchema.findById(id,(err,UpdateStatus)=>{
            UpdateStatus.Status = Status;
            UpdateStatus.save();
            res.send("Updated");
        })
    }
    catch(err){
        res.send(err);
    }
})
app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    EmployeeSchema.findByIdAndRemove(id).exec();
    res.send(id);
})
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server running on port 5000");
});
