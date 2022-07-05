const userDatamapper  = require('../../models/userDatamapper.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginController = {

    async login (req, res) {

        function generateAccessToken(user) {
            return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1800s'});
         }

        try {
            const { email, password } = req.body;
           // console.log({ email, password });
            const user = await userDatamapper.findUser(email);
            
            console.log("my user in the database",user);

            if(email !== user?.email){
                return res.status(401).json('mot de passe ou indentifiant invalide')
            }
            // ou je peux faire le if suivant :
            // if(!user){
            //     return res.status(401).json('mot de passe ou indentifiant invalide_1')
            // }
            const validPassword = await bcrypt.compare(password, user.password)
            console.log("validPassword :", validPassword);

            if(!validPassword){
                return res.status(401).json('mot de passe ou indentifiant invalide')
            }

            if (user && validPassword) {
            //console.log(user);
            const {id, email, lastname, firstname, role} = user
            const newUser = {id, email, lastname, firstname, role};
            console.log(newUser);

            const accessToken = generateAccessToken(newUser);
            //console.log('access Token', accessToken);

            res.json({
                accessToken,
            });
            }

        } catch (error) {
            console.trace(error);
        }
    }
}

module.exports = loginController;





// const loginController = {

//     async login (req, res) {

//         function generateAccessToken(user) {
//             return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1800s'});
//          }

//         try {
//             const { email, password } = req.body;
//             console.log({ email, password });
//             const user = await userDatamapper.findUser(email);
//             console.log("my user in the database",user);

//             // Validate user input
//             if (!(user?.email && user?.password)) {
//             res.status(400).send("All input is required");
//             }

//             // if (user && (await bcrypt.compare(password, user.password))) {
//             const accessToken = generateAccessToken(user);
//             console.log('access Token', accessToken);

//             res.json({
//                 accessToken
//             });
//             //}

//         } catch (error) {
//             console.trace(error);
//         }
//     }
// }

// module.exports = loginController;

//Create token other way to proceed
    // const token = jwt.sign(
    //     user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1800s'}
    // );
    // console.log(token);
    //}
    //}