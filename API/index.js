
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
// not useful now but useful to deploy de the app
const path = require('path');
const router = require('./app/router');
const cors = require('cors');
// const bodyParser = require('body-parser');
// const jwt = require('express-jwt');

const app = express();

app.use(express.urlencoded({extended: true}));

console.log('path = ',path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

const PORT = process.env.PORT || 4001;

app.use(cors({
    origin: "*"
}));


// if (process.env.NODE_ENV !== 'production') {
//    dotenv.config();
// }

// on ajoute le middleware de "nettoyage" des variables
//const bodySanitizer = require('./app/middlewares/body-sanitizer');
//app.use(bodySanitizer);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server launched on http://localhost:${PORT}`);
});