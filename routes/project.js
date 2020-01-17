// requires express
const express = require('express');
// sets a varaiable to express 
 const app = express();
 // sets routes 
 const router = express.Router();
// access json 
 const data = require('../data/data.json');
// sets router to id
 router.get('/:id', (req, res) => {  
   
    const {id} =req.params;
  
    
     res.render('project', {data: data, id: id} );
   
 }
     );

module.exports = router;
