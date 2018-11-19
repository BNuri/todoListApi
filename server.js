var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser')
  cors = require('cors');

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {useNewUrlParser: true});

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//setting CORS
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes'); //importing routes
routes(app); //register the routes




 app.listen(port);
 console.log('todo list RESTful API server started on: ' + port);

//help to redirect and respond whenever a wrong route is entered on the site
app.use(function(req, res){
  res.status(404).send({url: req.originalUrl + ' not found'})
});

//app.options('*', cors());
