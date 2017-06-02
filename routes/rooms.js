var express = require('express');
var router = express.Router();

var crypto = require('crypto');
var bs58 = require('bs58');

function uniq(a) {
  var seen = {};
  return a.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}


/* create new room */
router.get('/', function(req, res, next) {
  var roomId = bs58.encode(crypto.randomBytes(3*4));
  console.log("Made room with id %s", roomId);
  console.log("req.originalUrl %s", req.originalUrl);

  res.redirect(req.originalUrl + '/' + roomId);
});

/* room listing */
router.get('/:roomId', function(req, res, next) {
  var roomId = req.params.roomId;

  console.log("serving room %s", roomId);

  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log("fullUrl: %s", fullUrl)

  var db = req.db;
  var collection = db.get('rooms');

  collection.findOne({ name: roomId }).then((doc) => {
    if (doc === null) {
      console.log("no room yet");
      collection.insert({ name: roomId });
    } else {
      console.log("room exists");
    }
  });

  res.render('room', {
    title: 'Room ' + roomId,
    roomId: roomId,
    roomUrl: fullUrl
  });
});

router.get('/:roomId/list', function(req, res, next) {
  var roomId = req.params.roomId;
  var team = req.query.team;
  console.log("Got a list for room: %s team: %s", roomId, team);

  // console.log("room: %O", rooms[roomId]);

  var db = req.db;
  var collection = db.get('rooms');

  collection.findOne({ name: roomId }).then((doc) => {
    if (doc === null) {
      console.log("could not find any rooms.");
      res.json({});
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

router.post('/:roomId/square', function(req, res) {
  var roomId = req.params.roomId;
  var square = req.body.id;
  var team = req.body.team;
  var event = req.body.event;

  console.log("Got a square req for room: %s team: %s id: %s event: %s", roomId, team, square);

  var db = req.db;
  var collection = db.get('rooms');

  collection.findOne({ name: roomId }).then((doc) => {
    if (doc === null) {
      console.log("no room yet");
      collection.insert({ name: roomId });
    } else {
      console.log("room exists");
    }

    doc.teams = doc.teams || {};
    doc.teams[team] = doc.teams[team] || [];

    if (event == "click") {
      doc.teams[team].push(square);
    }
    else if (event == "unclick") {
      doc.teams[team] = doc.teams[team].filter(function(arg) { return arg != square; });

    }
    doc.teams[team] = uniq(doc.teams[team]);
    collection.update({ name: roomId }, doc);

    // console.log("%O", doc);
  });

  res.sendStatus(200);
});

module.exports = router;
