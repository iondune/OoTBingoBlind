
var express = require('express');
var router = express.Router();

var crypto = require('crypto');
var bs58 = require('bs58');

/* utils */
function uniq(a) {
  var seen = {};
  return a.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}


/* create new room */
router.get('/', function(req, res, next) {
  var roomId = bs58.encode(crypto.randomBytes(3*4));
  res.redirect('/rooms/' + roomId);
});


/* room listing */
router.get('/:roomId', function(req, res, next) {

  var roomId = req.params.roomId;

  var db = req.db;
  var collection = db.get('rooms');

  collection.findOne({ name: roomId }).then((doc) => {
    if (doc === null) {
      collection.insert({ name: roomId });
    }
  });

  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  res.render('room', {
    title: 'Room ' + roomId,
    roomId: roomId,
    roomUrl: fullUrl
  });

});


/* list of squares for a team */
router.get('/:roomId/list', function(req, res, next) {

  var roomId = req.params.roomId;
  var team = req.query.team;

  var db = req.db;
  var collection = db.get('rooms');

  collection.findOne({ name: roomId }).then((doc) => {

    if (doc === null) {
      console.log("could not find that rooms.");
      res.sendStatus(404);
    }
    else {
      doc.teams = doc.teams || {};
      doc.teams[team] = doc.teams[team] || [];

      var response = {};
      response["squares"] = doc.teams[team];

      res.json(response);
    }

  });
});


/* mutate a square */
router.post('/:roomId/square', function(req, res) {

  var roomId = req.params.roomId;
  var square = req.body.id;
  var team = req.body.team;
  var event = req.body.event;

  var db = req.db;
  var collection = db.get('rooms');

  collection.findOne({ name: roomId }).then((doc) => {

    if (doc === null) {
      collection.insert({ name: roomId });
    }

    doc.teams = doc.teams || {};
    doc.teams[team] = doc.teams[team] || [];
    doc.squares = doc.squares || {};
    doc.squares[square] = doc.squares[square] || "unmarked";

    if (event == "click") {
      doc.teams[team].push(square);

      if (doc.squares[square] === "unmarked") {
        doc.squares[square] = team;
      }
    }
    else if (event == "unclick") {
      doc.teams[team] = doc.teams[team].filter(function(arg) { return arg != square; });

      doc.squares[square] = "unmarked";

      for (var otherTeam in doc.teams) {
        if (doc.teams.hasOwnProperty(otherTeam)) {
          if (team != otherTeam) {
            for (var i = 0; i < doc.teams[otherTeam].length; ++ i) {
              if (doc.teams[otherTeam][i] == square) {
                if (doc.squares[square] === "unmarked") {
                  console.log("square forfeited by %s and given to %s: %s", team, otherTeam, square);
                  doc.squares[square] = otherTeam;
                }
              }
            }
          }
        }
      }
    }

    doc.teams[team] = uniq(doc.teams[team]);
    for (var field in doc.squares) {
      if (doc.squares.hasOwnProperty(field)) {
        if (doc.squares[field] == "unmarked") {
          delete doc.squares[field];
        }
      }
    }
    collection.update({ name: roomId }, doc);
  });

  res.sendStatus(200);
});

module.exports = router;


/*  */
router.get('/:roomId/results', function(req, res, next) {

  var roomId = req.params.roomId;
  var team = req.query.team;

  var db = req.db;
  var collection = db.get('rooms');

  collection.findOne({ name: roomId }).then((doc) => {

    if (doc === null) {
      console.log("could not find that rooms.");
      res.sendStatus(404);
    }
    else {
      doc.squares = doc.squares || {};

      res.render('results', {
        title: 'Room ' + roomId,
        roomId: roomId,
        squares: doc.squares
      });
    }

  });
});