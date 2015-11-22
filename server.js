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

var getTapById = function(id) {
  return DB.Tap
    .findOne({_id : id})
    .populate("keg")
    .exec();
}

var getTapByKegeratorAndHandle = function(kegerator, handle) {
  return DB.Tap
    .findOne({kegerator: kegerator, handle: handle})
    .populate("keg")
    .exec();
}

var createPourAndUpdateKeg = function(tap, quantity) {
  if (tap) {
    new DB.Pour({quantity: quantity, tap: tap})
      .save()
      .then(function(result) {
        if (tap.keg) {
          tap.keg.quantityPoured += quantity;
          tap.keg.quantityRemaining -= quantity;
          return tap.keg.save();
        } else {
          return Promise.resolve();
        }
      });
  } else {
    return Promise.reject({error : 'Tap not found'});
  }
}

var getKegById = function(id) {
  return DB.Keg.findOne({_id : id})
    .exec();
}

var updateAndSaveKeg = function(keg, update) {
    if (update.brewery)
      keg.brewery = update.brewery;
    if (update.name)
      keg.name = update.name;
    if (update.style)
      keg.style = update.style;
    if (update.notes)
      keg.notes = update.notes;
    if (update.srm)
      keg.srm = update.srm;
    if (update.ibu)
      keg.ibu = update.ibu;
    if (update.og)
      keg.og = update.og;
    if (update.fg)
      keg.fg = update.fg;
    if (update.abv)
      keg.abv = update.abv;
    if (update.balance)
      keg.balance = update.balance;
    if (update.calories)
      keg.calories = update.calories;
    if (update.quantityInitial)
      keg.quantityInitial = update.quantityInitial;

    return keg.save();
  };

app.param('tapId', function(req, res, next, tapId){
  req.tapId = tapId;
  next();
});
app.param('kegerator', function(req, res, next, kegerator) {
  req.kegerator = kegerator;
  next();
});
app.param('handle', function(req, res, next, handle) {
  req.handle = handle;
  next();
});
app.param('kegId', function(req, res, next, kegId) {
  req.kegId = kegId;
  next();
});

// GETS A LIST OF ALL TAPS
app.get('/api/taps', function(req, res, next) {
  DB.Tap.find({}).populate("keg").exec()
    .then(function(results) {
      res.send(results);
    }, function(reason) {
      res.status(500);
      res.send(reason);
    })
});

// GETS A TAP BY ID
app.get('/api/taps/:tapId', function(req, res, next) {
  if (!req.tapId.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(400);
    res.send({error : 'Invalid Id'});
    return;
  }
  DB.Tap.findOne({_id : req.tapId}).populate("keg").exec()
    .then(function(tap) {
      if (tap) {
        res.send(tap);
      } else {
        res.status(404);
        res.send({error : 'Tap not found'});
      }
    }, function(reason) {
      res.status(500);
      res.send(reason);
    });
});

// GETS A TAP BY KEGERATOR AND HANDLE
app.get('/api/taps/:kegerator/:handle', function(req, res, next) {
  DB.Tap.findOne({kegerator: req.kegerator, handle: req.handle}).populate("keg").exec()
    .then(function(tap) {
      if (tap) {
        res.send(tap);
      } else {
        res.status(404);
        res.send({error : 'Tap not found'});
      }
    }, function(reason) {
      res.status(500);
      res.send(reason);
    });
});

// UPDATES A TAP
app.put('/api/taps/:tapId', function(req, res, next) {
  console.log(req.body);
  if (!req.tapId.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(400);
    res.send({error : 'Invalid Id'});
    return;
  }
  DB.Tap.findOne({_id : req.tapId}).exec()
    .then(function(tap) {
      // check if we actually found the tap
      if (!tap) {
        return Promise.reject({error : 'Tap not found'});
      }

      console.log(tap);

      // make changes to the tap based on the body
      if (req.body.keg) {
        if (req.body.keg._id) {
          tap.keg = req.body.keg._id;
        } else {
          tap.keg = null;
        }
      }

      // return a promise to save the tap
      return tap.save();
    })
    .then(function(tap) {
      io.sockets.emit('refresh');
      res.status(204);
      res.send();
    }, function(reason) {
      if (reason.error == 'Tap not found') {
        res.status(404);
        res.send(reason);
      } else {
        console.log(reason);
        res.status(500);
        res.send(reason);
      }
    });
});

// CREATE A POUR FOR A TAP IDENTIFIED BY ITS ID
app.post('/api/taps/:tapId/pours', function(req, res, next) {
  console.log(req.body);
  if (!req.tapId.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(400);
    res.send({error : 'Invalid Id'});
    return;
  }
  getTapById(req.tapId)
  .then(function(tap) {
      return createPourAndUpdateKeg(tap, req.body.quantity);
    })
    .then(function(result){
      res.status(201);
      res.send();
      io.sockets.emit('refresh');
    }, function(reason) {
      if (reason.error == 'Tap not found') {
        res.status(404);
        res.send(reason);
      } else {
        console.log(reason);
        res.status(500);
        res.send(reason);
      }
    });
});

// CREATE A POUR FOR A TAP IDENTIFIED BY ITS KEGERATOR AND HANDLE
app.post('/api/taps/:kegerator/:handle/pours', function(req, res, next) {
  getTapByKegeratorAndHandle(req.kegerator, req.handle)
    .then(function(tap) {
      return createPourAndUpdateKeg(tap, req.body.quantity);
    })
    .then(function(result){
      res.status(201);
      res.send();
      io.sockets.emit('refresh');
    }, function(reason) {
      if (reason.error == 'Tap not found') {
        res.status(404);
        res.send(reason);
      } else {
        console.log(reason);
        res.status(500);
        res.send(reason);
      }
    });
});

// GET ALL KEGS
app.get('/api/kegs', function(req, res, next) {
  DB.Keg.find({}).sort({'brewery': 1, 'name': 1}).exec()
    .then(function(results) {
      res.send(results);
    }, function(reason) {
      res.status(500);
      res.send(reason);
    })
});


// SELECT A KEG
app.get('/api/kegs/:kegId', function(req, res, next) {
  if (!req.kegId.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(400);
    res.send({error : 'Invalid Id'});
    return;
  }
  DB.Keg
    .findOne({_id : req.kegId})
    .exec()
    .then(function(keg) {
      if (keg) {
        delete keg["pours"];
        res.send(keg);
      } else {
        res.status(404);
        res.send({error : 'Tap not found'});
      }
    });
});

// SELECT A KEG's POURS
app.get('/api/kegs/:kegId/pours', function(req, res, next) {
  if (!req.kegId.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(400);
    res.send({error : 'Invalid Id'});
    return;
  }
  DB.Keg
    .findOne({_id : req.kegId})
    .populate("pours")
    .exec()
    .then(function(keg) {
      if (keg) {
        res.send(keg.pours);
      } else {
        res.status(404);
        res.send();
      }
    });
});

// UPDATE A KEG
app.put('/api/kegs/:kegId', function(req, res, next) {
  if (!req.kegId.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(400);
    res.send({error : 'Invalid Id'});
    return;
  }
  getKegById(req.kegId).then(function(keg) {
    if (keg){
      updateAndSaveKeg(keg, req.body).then(function(keg) {
        console.log("saved the keg");
        io.sockets.emit('refresh');
        res.status(204);
        res.send();
      }, function(error) {
        console.log(error);
        res.status(500);
        res.send(error);
      });
    } else {
      res.status(404);
      res.send();
    }
  }, function(error) {
    console.log(error);
    res.status(500);
    res.send(error);
  });
});

// CREATE A KEG
app.post('/api/kegs', function(req, res, next) {
  var keg = new DB.Keg({
    brewery : req.body.brewery,
    name : req.body.name,
    style : req.body.style,
    notes : req.body.notes,
    srm : req.body.srm,
    ibu : req.body.ibu,
    og : req.body.og,
    fg : req.body.fg,
    abv : req.body.abv,
    balance : req.body.balance,
    calories : req.body.calories,
    quantityInitial : req.body.quantityInitial
  });
  keg.save().then(function(keg) {
    console.log("saved the keg");
    res.status(201);
    res.send();
  }, function(error) {
    console.log(error);
    res.status(500);
    res.send(error);
  });
});

// DELETE A KEG
app.delete('/api/kegs/:kegId', function(req, res, next) {
  if (!req.kegId.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(400);
    res.send({error : 'Invalid Id'});
    return;
  }
  DB.Keg.remove({_id : req.kegId}).then( function(result) {
    console.log(result);
    if (result.result && result.result.n == 0) {
      res.status(404);
    } else {
      res.status(204);
    }
    res.send();
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



