const express = require ('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const path = require('path');
const app = express();

const db = mysql.createConnection({
    host :  process.env.DATABASE_HOST,
    user :  process.env.DATABASE_USER,
    password:  process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
})

db.connect((error)=>{
    if (error){
        console.log(error)
    }else {
        console.log('MSQL has been connected...');
    }
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.set('view engine', 'hbs');


const port = 5000;
app.get ("/", (req, res) => {
   //res.send("<h1>HOME PAGE</h1>")
    res.render("index")


});

app.listen(5000, () => {
    console.log (`Server started on port ${port}`);

});



