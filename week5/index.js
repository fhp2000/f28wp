const express= require('express');
const mysql= require('mysql');
const dotenv= require('dotenv');
dotenv.config({path: './.env'});
const path= require('path');

const app= express();
const port= 5000;

const db=mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: 'root' || process.env.DATABASE_USER , 
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('Mysql Connected...');
    }
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','hbs');

app.use('/', require('./routes/pages'))

app.listen(5000, () =>{
    console.log(`Server started on port ${port}`);
});

