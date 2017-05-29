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

  for (var square in rooms[roomId]) {
    if (rooms[roomId][square] == team) {
      response["squares"].push(square);
    }
    // console.log("square %s owner %s", square, rooms[roomId][square]);
  }
  // console.log("response: %O", response);

  res.json(response);
});

router.post('/:roomId/square', function(req, res) {
  var roomId = req.params.roomId;
  var square = req.body.id;
  var team = req.body.team;

  console.log("Got a square req for room: %s team: %s id: %s", roomId, team, square);
  rooms[roomId][square] = team;
  res.sendStatus(200);
});

module.exports = router;
