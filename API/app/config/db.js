// const { Client } = require('pg');
// const client = new Client(process.env.DATABASE_URL);
// client.connect();

// module.exports = client;


const debug = require('debug')('SQL:log');
const { Pool } = require('pg');
 
 const dbConfig = {
     connectionString: process.env.DATABASE_URL,
 };
 
 if (process.env.NODE_ENV === 'production') {
     dbConfig.ssl = { rejectUnauthorized: false };
 }
 
 const pool = new Pool(dbConfig);
 
 module.exports = {
     originalClient: pool,
     async query(...params) {
         debug(...params);
         return this.originalClient.query(...params);
     },
 };

// // an other way to do it
//  const Pool = require("pg").Pool

// const pool = new Pool({
//     user:process.env.DB_USER,
//     password:process.env.DB_PASSWORD,
//     host: "localhost",
//     port:process.env.PORT,
//     database:"atelierrc"
// })

// module.exports = pool;