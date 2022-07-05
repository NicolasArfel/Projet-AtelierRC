const client = require("../config/db");

// /**
//  * @typedef {Object} InputData
//  * @property {number} id - Unique identifyer of the table
//  */

const projectDatamapper = {
    /**
     * Get all the project without filter nore order
     * @returns all the all projects from the database
     */

    async findAll() {
        const result = await client.query(
            'SELECT project.name AS project_name, project_photo.name AS photo_name, * FROM "project" INNER JOIN project_photo ON project_photo.project_id = project.id WHERE cover_photo = true'
        );
        return result.rows;
    },

    async findAllProjects() {
        const result = await client.query(
            'SELECT project.name AS project_name, * FROM project'
        );
        return result.rows;
    },

    //     async findAllPhotos() {
    //         const result = await client.query('SELECT project.name AS project_name, project_photo.name AS photo_name, * FROM "project" INNER JOIN project_photo ON project_photo.project_id = project.id');
    //         return result.rows;
    // },

    /**
     * Get the project by his id
     * @param {number} id - the id the selected project
     * @returns the selected project or undefined if no project has this category
     */

    async findByPk(id) {
        const preparedQuery = {
            text: `SELECT project.name AS project_name, project_photo.name AS photo_name, * FROM "project" INNER JOIN project_photo ON project_photo.project_id = project.id WHERE project_id = $1`,
            values: [id],
        };
        const result = await client.query(preparedQuery);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows;
    },

    async findProjectByPkPhoto(id) {
        const preparedQuery = {
            text: `SELECT project.name AS project_name, project_photo.name AS photo_name, * FROM "project" INNER JOIN project_photo ON project_photo.project_id = project.id WHERE project_photo.id = $1`,
            values: [id],
        };
        const result = await client.query(preparedQuery);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows;
    },

    async findPhotoByPk(id) {
        const preparedQuery = {
            text: `SELECT * FROM "project_photo" WHERE id = $1`,
            values: [id],
        };
        const result = await client.query(preparedQuery);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows;
    },

    async findAllStatus() {
        const preparedQuery = {
            text: `SELECT * FROM "status"`,
        };
        const result = await client.query(preparedQuery);

        return result.rows;
    },

    /**
     * Add to the database
     * @param {InputData} data - the data to insert
     * @returns The project inserted in the database
     */
    async insert(data, originalName, spacingProjectName, slugProjectName) {
        // console.log('je suis dans le console.log (data)', data);

        //! une possibilité de vérification supplémentaire :
        // const projectCheck = {
        //     text: `SELECT * FROM project WHERE name=$1 OR slug=$2`,
        //     values: [data.project_name, data.slug]
        // }
        // const result = await client.query(projectCheck);
        // console.log('je suis ici dans le check', result);
        // if (result.rows.length > 0) {
        //     return { error: "Le nom du projet existe déjà"}
        // }

        const preparedProjectQuery = {
            text: ` INSERT INTO "project"
                    (
                        "name", 
                        "slug", 
                        "location", 
                        "date", 
                        "program", 
                        "surface_area", 
                        "type", 
                        "client", 
                        "design", 
                        "photo_credit", 
                        "user_id", 
                        "status_id"
                        )
                    VALUES
                    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
                    RETURNING id;`,

            values: [
                spacingProjectName,
                slugProjectName,
                data.location,
                data.date,
                data.program,
                data.surface_area,
                data.type,
                data.client,
                data.design,
                data.project_photo_credit,
                data.user_id,
                data.status_id,
            ],
        };

        const result1 = await client.query(preparedProjectQuery);
        console.log("je suis ici", result1);
        const projectId = result1.rows[0].id;

        if (originalName === "") {
            originalName = null;
            console.error(`Merci de remplir le champs ${originalName}`);
        }

        const preparedPhotoQuery = {
            text: `
              INSERT INTO "project_photo"  (
                        "name", 
                        "position", 
                        "photo_credit", 
                        "cover_photo", 
                        "project_id"
                        )
                     VALUES 
              ($1, $2, $3, $4, $5);`,

            values: [
                originalName,
                data.position,
                data.photo_credit,
                data.cover_photo,
                projectId,
            ],
        };
        const result2 = await client.query(preparedPhotoQuery);
        return result2.rowCount;
    },

    async addImageToProject(photo_credit, project_id, originalname, position) {
        // if(originalname === ""){
        //     originalname = null;
        //     console.error(`Merci de remplir le champs ${originalname}`);
        // }

        const preparedPhotoQuery = {
            text: `
                  INSERT INTO "project_photo"  (
                            "name", 
                            "position", 
                            "photo_credit", 
                            "cover_photo", 
                            "project_id"
                            )
                         VALUES 
                  ($1, $2, $3, $4, $5);`,

            values: [originalname, position, photo_credit, false, project_id],
        };
        const result = await client.query(preparedPhotoQuery);
        return result.rowCount;
    },

    //! fonction à compléter
    // /**
    //  * Modify a project in the database
    //  * @param {number} id - the id to modify
    //  * @param {InputData} inputData
    //  * @returns
    //  */
    // async update(id, inputData) {
    //     const data = { ...inputData, id };
    //     const savedProject = await client.query(
    //         'SELECT * FROM "project"($1)',
    //         [data],
    //     );

    //     return savedProject.rows[0];
    // },

    // async update(id, project) {
    //     const fields = Object.keys(project).map((prop, index) => `"${prop}" = $${index + 1}`);
    //     console.log(fields)
    //     const values = Object.values(project);

    //     const savedProject = await client.query(
    //         `
    //             UPDATE "project" SET
    //                 ${fields}
    //             WHERE id = $${fields.length + 1}
    //             RETURNING *
    //         `,
    //         [...values, id],
    //     );

    //     return savedProject.rows[0];
    // },

    /**
     * Delete the project from the database
     * @param {number} id - the id to delete
     * @returns the deleted project
     */

    async delete(id) {
        const preparedDeleteQuery = {
            text: `DELETE FROM "project" WHERE "id" = $1;`,
            values: [id],
        };
        const deletedProject = await client.query(preparedDeleteQuery);
        return !!deletedProject.rowCount;
    },

    async deletePhoto(id) {
        const preparedPhotoDeleteQuery = {
            text: `DELETE FROM "project_photo" WHERE "id" = $1;`,
            values: [id],
        };
        const deletedPhoto = await client.query(preparedPhotoDeleteQuery);
        return !!deletedPhoto.rowCount;
    },

    async updateOneProject(
        id,
        name,
        slug,
        location,
        date,
        program,
        surface_area,
        type,
        project_client,
        design,
        photo_credit,
        status_id
    ) {
        const preparedQuery = {
            text: `UPDATE "project" SET name=$2, slug=$3, location=$4, date=$5, program=$6, surface_area=$7, type=$8, client=$9, design=$10, photo_credit=$11, status_id=$12 WHERE id=$1`,
            values: [
                id,
                name,
                slug,
                location,
                date,
                program,
                surface_area,
                type,
                project_client,
                design,
                photo_credit,
                status_id,
            ],
        };

        const result = await client.query(preparedQuery);

        // if(result.rowCount === 0) {
        //     return null;
        // }

        return result;
    },

    async updateCoverPhoto(data, originalname, project_id) {
        const preparedQuery = {
            // text: `UPDATE "project_photo" SET name=$2, photo_credit=$3, position=$4, cover_photo=$5 WHERE id=$1`,
            text: `
            INSERT INTO "project_photo"  (
                "name", 
                "position", 
                "photo_credit", 
                "cover_photo", 
                "project_id"
                )
            VALUES 
                ($1, $2, $3, $4, $5);`,

            values: [originalname, 1, data.photo_credit, true, project_id],
        };

        const result = await client.query(preparedQuery);

        // if(result.rowCount === 0) {
        //     return null;
        // }

        return result;
    },

    async turnOffCoverPhoto(photo_id, position) {
        const preparedQuery = {
            text: `UPDATE "project_photo" SET cover_photo=$2, position=$3 WHERE id=$1`,
            values: [photo_id, false, position],
        };

        const result = await client.query(preparedQuery);

        // if(result.rowCount === 0) {
        //     return null;
        // }

        return result;
    },

    async turnONCoverPhoto(id) {
        const preparedQuery = {
            text: `UPDATE "project_photo" SET cover_photo=$2, position=$3 WHERE id=$1`,
            values: [id, true, 1],
        };

        const result = await client.query(preparedQuery);

        return result;
    },
};

module.exports = projectDatamapper;