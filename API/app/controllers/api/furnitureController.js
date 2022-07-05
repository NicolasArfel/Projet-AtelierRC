const furnitureDatamapper  = require('../../models/furnitureDatamapper.js');


const furnitureController = {
    async getAllFurnitures(_, res) {
       try {
            const furnitures = await furnitureDatamapper.findAll();
            return res.json(furnitures);
    
       } catch(error) {
          console.trace(error);
          res.status(500).json(error.toString());
        }
    },

    async getOne(req, res) {
       try {
            const furniture = await furnitureDatamapper.findByPk(req.params.id);
          //  if (!project) {
                //throw new ApiError('Post not found', { statusCode: 404 });
              //  res.send('furniture not found');
           // }
            return res.json(furniture);
        } catch(error) {
           console.trace(error);
           res.status(500).json(error.toString());
        }
    }
};

module.exports = furnitureController;