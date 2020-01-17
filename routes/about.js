// requires express 
const express = require('express');

const router = express.Router();
// acesses the data.json file 
const  {projects}= require('../data/data.json');

// sets the router 
router.get('/', (req, res) =>{
    res.render('about');
});
module.exports = router;
// exports router to other files 
