const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminModel = require('./models/admins');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/taskmaster");


app.get('/getAdmins', (req, res) => {
    adminModel.find()
    .then(admins => res.json(admins))
    .catch(err => res.json(err))
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 

