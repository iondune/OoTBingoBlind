var express = require('express');
var router = express.Router();

var crypto = require('crypto');
var bs58 = require('bs58')


var rooms = {};

/* GET users listing. */
router.get('/', function(req, res, next) {
  var roomId = bs58.encode(crypto.randomBytes(3*4));
  console.log("Made room with id %s", roomId);
  console.log("req.originalUrl %s", req.originalUrl);

  res.redirect(req.originalUrl + '/' + roomId);
});

/* GET users listing. */
router.get('/:roomId', function(req, res, next) {
  var roomId = req.params.roomId;

  console.log("serving room %s", roomId);

  if (! rooms.hasOwnProperty(roomId)) {
    rooms[roomId] = {};
  }

  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log("fullUrl: %s", fullUrl)

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

  var response = {};
  response["squares"] = [];

  // console.log("room: %O", rooms[roomId]);

  if (Array.isArray(rooms[roomId][team])) {
    for (var i = 0; i < rooms[roomId][team].length; ++ i) {
      response["squares"].push(rooms[roomId][team][i]);
    }

    console.log("%O", rooms[roomId][team]);
  }

  res.json(response);
});

router.post('/:roomId/square', function(req, res) {
  var roomId = req.params.roomId;
  var square = req.body.id;
  var team = req.body.team;
  var event = req.body.event;

  console.log("Got a square req for room: %s team: %s id: %s event: %s", roomId, team, square);
  if (! Array.isArray(rooms[roomId][team])) {
    rooms[roomId][team] = [];
  }

  if (event == "click") {
    rooms[roomId][team].push(square);
  }
  else if (event == "unclick") {
    rooms[roomId][team] = rooms[roomId][team].filter(function(arg) { return arg != square; });
  }
  console.log("%O", rooms[roomId][team]);

  res.sendStatus(200);
});

module.exports = router;
