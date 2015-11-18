// Babel ES6/JSX Compiler
require('babel-core/register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var DB = require('./models/db');
var config = require('./config');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connection.on('error', function(error) {
  console.error('Error in MongoDb connection: %j', error);
  mongoose.disconnect();
});
mongoose.connection.on('disconnected', function() {
 console.log('MongoDB disconnected!');
 throw new Error("MongoDb disconnected!");
});
mongoose.connect(config.database, function(error) {
  if (error) throw error;
});



var updateKegPour = function(query, quantity) {
  return DB.Tap
    .findOne(query)
    .populate("keg")
    .exec()
    .then(function(tap) {
      if (!tap) throw new Error ("Tap not found");
      if (!tap.keg) throw new Error("Tap does not have a keg");
      var keg = tap.keg;
      keg.pours.push({quantity: quantity});
      keg.quantityPoured += quantity;
      keg.quantityRemaining -= quantity;
      return keg.save();    
    });
  
}

app.param('tapId', function(req, res, next, tapId){
  req.tapId = tapId;
  next();
});
app.post('/api/taps/:tapId/pours', function(req, res, next) {
  var query = {_id: req.tapId};
  updateKegPour(query, req.body.quantity)
    .then(
      function(results) {
        io.sockets.emit('refresh');
        res.status(201);
        res.send();
      },
      function(reason) {
        console.log(reason);
        res.status(400);
        res.send({error: reason});
      }
    );
});


app.param('kegerator', function(req, res, next, kegerator) {
  req.kegerator = kegerator;
  next();
});
app.param('handle', function(req, res, next, handle) {
  req.handle = handle;
  next();
});
app.post('/api/taps/:kegerator/:handle/pours', function(req, res, next) {
  var query = {kegerator: req.kegerator, handle: req.handle};
  updateKegPour(query, req.body.quantity)
    .then(
      function(results) {
        io.sockets.emit('refresh');
        res.status(201);
        res.send();
      },
      function(reason) {
        console.log(reason);
        res.status(404);
        res.send({error: reason});
      }
    );
});

app.get('/api/taps', function(req, res, next) {
  var query;
  if (req.query.kegerator && req.query.handle) {
    query = DB.Tap.find({kegerator: req.query.kegerator, handle: req.query.handle});
  } else {
    query = DB.Tap.find({}).populate("keg");
  }
  query.exec()
  .then(function(results) {
    res.send(results);
  });
});

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});


/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Add a connect listener
io.on('connection', function(socket) {

    console.log('Client connected.');

    // Disconnect listener
    socket.on('disconnect', function() {
        console.log('Client disconnected.');
    });
});

// pre-load data if not present

// DB.Keg.remove({}).exec()
// .then(function(results) {
//  return DB.Tap.remove({}).exec();
// })
// .then(function(results) {
//   return new DB.Keg({
//     brewery : "Georgetown Brewery",
//     name : "Choppers Red",
//     style : "Irish Red Ale",
//     notes : "A hoppy Northwest style red ale. Lots of late addition Cascade hops give this malty red ale a floral and spicy aroma. Finishes with a subtle malty sweetness.",
//     srm : 9.0,
//     ibu : 58,
//     og : 1.058,
//     fg : 1.010,
//     abv : 0.088,
//     balance : 1.0,
//     calories : 195,
//     quantityInitial : 666,
//     quantityPoured : 0,
//     quantityRemaining : 666
//   }).save();
// })
// .then(function(keg) {
//   return new DB.Tap({
//        kegerator: "5k",
//        handle: "Left",
//        keg: keg
//      }).save();
// })
// .then(function(results) {
//   return new DB.Keg({
//     brewery : "Deschutes Brewery",
//     name : "Pinedrops IPA",
//     style : "American IPA",
//     notes : "This lively IPA delivers a crisp and light malt body with ample citrus and pine notes from Chinook and Equinox hops. Inspired by the aromas and silence we experience when exploring the scenic pine forests just up the road from our brewhouse.",
//     srm : 3.0,
//     ibu : 70,
//     abv : 0.066,
//     quantityInitial : 666,
//     quantityPoured : 0,
//     quantityRemaining : 666,
//   }).save();
// })
// .then(function(keg) {
//   return new DB.Tap({
//        kegerator: "5k",
//        handle: "Right",
//        keg: keg
//      }).save();
// })
// .then(function(results) {
//   return new DB.Keg({
//     brewery : "Schooner Exact",
//     name : "Hoppy Holidays",
//     style : "American Amber Ale",
//     notes : "A rich, malty beer with an assertive but balanced hop character. Hints of chocolate and dark fruits greet you on the nose. Roasted malt undertones play over your tongue and finish with an earthy hop finish.",
//     srm : 18.1,
//     ibu : 52,
//     og : 1.068,
//     fg : 1.010,
//     abv : 0.076,
//     balance : 0.76,
//     calories : 228,
//     quantityInitial : 666,
//     quantityPoured : 0,
//     quantityRemaining : 666,
//   }).save();
// })
// .then(function(keg) {
//   return new DB.Tap({
//        kegerator: "3k",
//        handle: "Left",
//        keg: keg
//      }).save();
// })
// .then(function(results) {
//   return new DB.Keg({
//     brewery : "Sumerian Brewing Company",
//     name : "Eruption Double IPA",
//     style : "Double IPA",
//     srm : 16,
//     ibu : 99,
//     abv : .105,
//     quantityInitial : 666,
//     quantityPoured : 0,
//     quantityRemaining : 666,
//   }).save();
// })
// .then(function(keg) {
//   return new DB.Tap({
//        kegerator: "3k",
//        handle: "Right",
//        keg: keg
//      }).save();
// })
// .then(function(results) {
//   console.log(results);
// });


server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});


