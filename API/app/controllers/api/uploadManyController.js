const multer = require('multer')
const path = require('path')
const projectDatamapper = require('../../models/projectDatamapper');
// const forEach = require('async-foreach').forEach;


// /**
//      * Project controller to create a record
//      * @param {*} req Express req.object (not used)
//      * @param {*} res Express response object
//      * @returns Route API JSON response
//      */


const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/image/projects')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname)
    }
})

// console.log('originalName', multerConfig.getFilename);

function checkFileType(file, callback) {
    // console.log('file', file)
    // Allowed ext
    const filetypes = /jpeg|jpg|png/
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    // console.log('extname', extname)
    // Check mime
    const mimetype = filetypes.test(file.mimetype)
    // console.log('mimetype', mimetype)

    if (mimetype && extname) {
        return callback(null, true)
    } else {
        callback('Error: Images Only!')
    }
}

const multiUpload = multer({
    storage: multerConfig,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: function (req, file, callback) {
        checkFileType(file, callback)
    },
})

exports.uploadMany = multiUpload.array('uploadedImages', 10);

exports.multiUpload = async (req, res) => {

    const files = req.files;
    //console.log("je suis ici :", files);
    const project_id = Number(req.params.id);
    console.log('project_id', project_id);
    const data = req.body;

    const currentProject = await projectDatamapper.findByPk(project_id);
    // console.log('all projects : ', currentProject.length);
    const position = currentProject.length + 1;
    console.log(position);

    try {
        files.forEach(async file => {
            await projectDatamapper.addImageToProject(data.photo_credit, project_id, file.filename, position);
        })
        return res.status(200).json(`les images du projet ont bien été ajoutées`);

    } catch (error) {
        console.trace(error);
        res.status(500).json(error.toString());
    }
}