//! si j'utilise le isUnique du dataMapper (code pour le controller):    
//     async create(req, res) {
//       const data = req.body;
//       const project = await projectDatamapper.isUnique(data);
//       if (project) {
//           let field;
//           if (project.name === req.body.name) {
//               field = 'project_name';
//           } 
//           if (project_photo.photo_name === req.body.name) {
//           field = 'photo_name'
//           } else {
//               field = 'slug';
//           console.error(`Category already exists with this ${field}`, { statusCode: 400 });
//       }

//       const savedProject = await projectDatamapper.insert(data);
//       return res.json(savedProject);
//   },




 //! fonction du datamapper à compléter si je souhaite utiliser le IsUnique (ne fonctionne pas pour l'instant)
        // /**
        //  * Vérify if a project already exist with this title or slug
        //  * @param {object} inputData - the result data entered by the client in the form
        //  * @param {number} projectId - the id of the project (optionnal)
        //  * @returns the existing category
        //  */

        // async isUnique(inputData, projectId) {
        //     const fields = [];
        //     const values = [];
        //     Object.entries(inputData).forEach(([key, value], index) => {
        //         if (['name', 'slug'].includes(key)) {
        //             fields.push(`"${key}" = $${index + 1}`);
        //             values.push(value);
        //         }
        //     });
    
        //     const preparedQuery = {
        //         text: `SELECT * FROM project WHERE (${fields.join(' OR ')})`,
        //         values,
        //     };
    
        //     if (projectId) {
        //         preparedQuery.text += ` AND id <> $${values.length + 1}`;
        //         preparedQuery.values.push(projectId);
        //     }
        //     const result = await client.query(preparedQuery);
    
        //     return result.rows[0];
        // },



           //! DATAMAPPER ne pas utiliser, exemple de requête pour créer des projets
        // const preparedQuery = {
        //     text: `
        //         INSERT INTO "project"
        //         (
        //             "name", 
        //             "slug", 
        //             "location", 
        //             "date", 
        //             "program", 
        //             "surface_area", 
        //             "type", 
        //             "client", 
        //             "design", 
        //             "photo_credit", 
        //             "user_id", 
        //             "status_id"
        //             )
        //         VALUES
        //         ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);
        //     `,
        //     values: [
        //         data.name,
        //         data.slug,
        //         data.location,
        //         data.date,
        //         data.program,
        //         data.surface.area,
        //         data.type,
        //         data.client,
        //         data.design,
        //         data.photo_credit,
        //         data.user_id,
        //         data.status_id,
        //     ]
        // }
        // const result = await client.query(preparedQuery);
        // return result.rowCount;
    //},