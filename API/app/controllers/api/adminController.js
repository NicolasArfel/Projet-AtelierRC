const userDataMapper  = require('../../models/userDatamapper.js');
const client = require('../../config/db');

const adminController = {

    async updateAdminProfile(req, res) {
        const adminProfile = await userDataMapper.findByPk(req.params.id);
        console.log (adminProfile);
        if (!adminProfile) {
            res.send('user profile not found');
        }
        
        if(adminProfile) {
            const id = req.params.id;
            console.log(id)
            const email = req.body.email;
            console.log(email)
            const firstname = req.body.firstname;
            console.log(firstname)
            const lastname = req.body.lastname;
            console.log(lastname)
            const password = req.body.password;
            console.log(password)
          

            const updateProfile = await userDataMapper.updateUserProfile(id, email, firstname, lastname, password);
            console.log(updateProfile);
            res.send('Profile has been updated');
        }
            }
        }

        



module.exports = adminController;

