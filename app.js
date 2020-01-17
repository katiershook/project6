const express = require('express')
const app = express();
const router = express.Router();
const routes = require('./routes');
const indexRoute = require('./routes/index');
const about = require('./routes/about');
const project = require('./routes/project');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use('/static', express.static('public'));
app.set('view engine', 'pug');
app.use(routes);
app.use('/about',about);
app.use('/project', project)

app.use('/', indexRoute);




app.use((req,res, next) =>{
const err = new Error(' whoops not found');
err.status =404;

next(err);


});
app.use((err, req, res, next )  => { 
    console.log('test');
    res.locals.error = err; 
   
    res.status(err.status);
    res.render('error',);
    });

app.listen(3000, () => {
	console.log("up and running on local host 3000")
});

module.exports = router;
