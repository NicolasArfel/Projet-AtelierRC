const client = require('../config/db');

const furnitureDatamapper = {
    
    async findAll() {
            const result = await client.query('SELECT furniture.name AS furniture_name, * FROM "furniture" INNER JOIN furniture_photo ON furniture_photo.furniture_id = furniture.id WHERE cover_photo = true');
            return result.rows;
    },

    async findByPk(id) {
        const preparedQuery = {
            text: 'SELECT furniture.name AS furniture_name,furniture_photo AS photo_name, * FROM "furniture" INNER JOIN furniture_photo ON furniture_photo.furniture_id = furniture.id WHERE furniture_id = $1',
            values: [id]
        }
        const result = await client.query(preparedQuery);
        return result.rows;
    },

    async delete(id) {
        await client.query(`DELETE FROM "furniture" WHERE "furniture_id" = $1`, [id]);
    },

    async insert(data) {
        const preparedQuery = {
            text: `
                INSERT INTO "furniture"
                (
                    "id",
                    "name",
                    "slug",
                    "type",
                    "condition",
                    "description"
                    "availability",
                    "price",
                    "user_id",
                    "created_at",
                    "updated_at"
                    )
                VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);
            `,
            values: [
                data.id,
                data.name,
                data.slug,
                data.type,
                data.condition,
                data.description,
                data.availability,
                data.price,
                data.user_id,
            ]
        }
        const result = await client.query(preparedQuery);
        return result.rowCount;
    },
};

module.exports = furnitureDatamapper;