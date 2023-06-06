const dotenv = require('dotenv');
const mysql = require('mysql');

dotenv.config();

// Database connection
const pool =  mysql.createPool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

// checking databse connection
pool.getConnection((err)=>{
    if(err){
        console.log(err);
    }else{
       console.log('Database connected');
    }
});

module.exports = pool;