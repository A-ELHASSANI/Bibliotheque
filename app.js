const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(express.json());

// Importation des routes
const livresRoutes = require('./routes/livres');
const abonesRoutes = require('./routes/abones');
const pretsRoutes = require('./routes/prets');

// Utilisation des routes
app.use('/livres', livresRoutes);
app.use('/abones', abonesRoutes);
app.use('/prets', pretsRoutes);

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get("/", function (req, res) {
    res.sendFile(
        __dirname + "/index.html"
    );
});

const sequelize = require('./config/database');
const Livre = require('./models/livresModel');
const Abonne = require('./models/abonesModel');
const Pret = require('./models/pretsModel');

sequelize.sync().then(() => {
    console.log('Database & tables created!');
});
  


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

