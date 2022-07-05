const express = require('express');

// importer les controllers
const projectController = require('./controllers/api/projectController');
const furnitureController = require('./controllers/api/furnitureController');
const loginController = require('./controllers/api/loginController');
const contactController = require('./controllers/api/contactController');
const adminController = require('./controllers/api/adminController');
// const adminController = require('./controllers/api/adminController');
const { upload, uploadImage } = require('./controllers/api/uploadController');
const { uploadMany, multiUpload } = require('./controllers/api/uploadManyController');


const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello');
});

/** Projects */
router.get('/api/projects', projectController.getAllProjects);
router.get('/api/getOnlyProjects', projectController.findAllProjects)
router.get('/api/project/:id', projectController.getOne);
router.get('/api/status', projectController.getStatus);

/* Furnitures */
router.get('/api/furnitures', furnitureController.getAllFurnitures);
router.get('/api/furniture/:id', furnitureController.getOne);

/* Login admin */
router.post('/api/login', loginController.login);

/* Admin interface */
router.put('/api/admin/profile/:id', adminController.updateAdminProfile);
// router.post('/api/admin/project', projectController.);
// router.post('/api/admin/project', projectController.create);
router.put('/api/admin/project/:id', projectController.updateOneProject);
router.put('/api/admin/project/:id/coverphoto', projectController.switchCoverPhotoProject);

/* admin interface - create project and upoad images*/
router.post('/api/admin/add-project', uploadImage, upload);
router.post('/api/admin/add-images/:id', uploadMany, multiUpload);
// ajouté par Véro 22/06/2022
router.delete('/api/admin/delete-images/:id', projectController.deletePhoto);



// router.patch('/api/admin/project/:id', projectController.update)
router.delete('/api/admin/project/:id', projectController.delete);

/* Contact */
router.post('/api/contact', contactController.mail);


/*  Admin */
// router.patch('/api/admin/profile/:id', adminController.profile);

module.exports = router;
