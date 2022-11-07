const express = require ('express');
const app = express();
const {Pool} = require("pg");
const fs = require('fs');
app.use(express.json());
const cors = require("cors");
app.use(cors({origin: '*'}));
const PORT = 5000;


const pool = new Pool({
    user:'postgres',
    password:'newPassword',
    host: 'localhost',
    port: 5432,
    database:'journalentry'
})


// test GET request  
app.get('/',(req, res) =>{ 
    res.send('Hello World')
});
// CRUD 
// Method GET : ALL the DONUTS 
app.get("/api",(req,res)=>{
    pool.query('SELECT * FROM journalentry;').then((result) => {
        res.setHeader('Content-Type', 'application/json');
        console.log(result.rows)
        res.send(result.rows)
    })
})

//POST : adding journal entry 
app.post("/add",(req,res)=>{
    pool.query('INSERT INTO journalentry (journalentry_name, journalentryDesc) VALUES ($1 , $2) RETURNING *;'
    ,[req.body.journalentry_name,req.body.journalentryDesc]).then((result) => {
        res.setHeader('Content-Type', 'application/json');
        console.log(result.rows)
        res.send(result.rows)
    })
})
//DELETE :deleting entry 
app.delete('/delete',(req, res) => {
    pool.query('DELETE FROM journalentry WHERE id = $1', [req.params.id],(error, result) =>{
        if(error) {
            console.log(error)
        }else{
            res.send("Entry Deleted");
        }
    })
})
//     ,[req.body.journalentry_name,req.body.journalentryDesc]).then((result) => {
//         res.setHeader('Content-Type', 'application/json');
//         console.log(result.rows)
//         res.send(result.rows)
//     })
// })



// // Method: GET : Donuts with specific Id
// app.get("/journalEntry/:id",(req,res)=>{
//     let {id} = req.params;
//     pool.query(`SELECT * FROM journalEntry WHERE id= $1`,[id])
//     // .then(result =>{
//         res.send("Entry with Specific id");
//         res.status(200);
//     })
//     app.post("/journalEntry", (req,res) =>{
//         let{donuts_name, topping, qty} =req.body
//         pool.query(`INSERT INTO donuts(donuts_name,topping,qty) VALUES ($1, $2, $3)`, [donuts_name,topping,qty])
//          res.send("Newly created donut").status(201)
//         })







app.listen(PORT, () =>{

 console.log(`our app running on ${PORT}`)
})