const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

//Setar parametro para permitir acessos a api
app.use(cors());

app.use(express.json());
app.use(routes);

// Inociando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.listen(3001);