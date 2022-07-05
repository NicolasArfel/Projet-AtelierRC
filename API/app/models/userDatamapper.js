const client = require('../config/db');


const userDatamapper = {

 async findUser(email) {
    const preparedQuery = {
        text: `SELECT * FROM "user" WHERE "email"=$1`,
        values:[email]
    }
    const result = await client.query(preparedQuery);
    return result.rows[0];
},

async findByPk(id) {
    const preparedQuery = {
        text: `SELECT * FROM "user" WHERE "id" = $1`,
        values: [id]
    }
    const result = await client.query(preparedQuery);
    return result.rows[0];
},

async updateUserProfile(id, email, firstname, lastname, password) {
    
    const preparedQuery = {
        text: `UPDATE "user" SET email=$2, firstname=$3, lastname=$4, password=$5 WHERE id=$1`,
        values:[id, email, firstname, lastname, password]
    };

    const result = await client.query(preparedQuery);
    console.log(result)

    if(result.rowCount === 0) {
        return null;
    }
    
    return result.rows;
},




};

module.exports = userDatamapper;