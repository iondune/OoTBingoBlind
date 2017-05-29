var express = require('express');
var router = express.Router();

var crypto = require('crypto');
var bs58 = require('bs58')


var numRenders = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var roomId = bs58.encode(crypto.randomBytes(3*4));
  console.log("Made room with id %s", roomId);
  console.log("req.originalUrl %s", req.originalUrl)
  res.redirect(req.originalUrl + '/' + roomId)
});

/* GET users listing. */
router.get('/:roomId', function(req, res, next) {
  var roomId = req.params.roomId;

  console.log("serving room %s", roomId);
  numRenders = numRenders + 1;
  console.log("rendered %d times", numRenders);

  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log("fullUrl: %s", fullUrl)

  res.render('room', {
    title: 'Room ' + roomId,
    numRenders: numRenders,
    roomId: roomId,
    roomUrl: fullUrl
  });
});

router.post('/:roomId/square', function(req, res) {
  var roomId = req.params.roomId;

  console.log("Got a square req for room: %s team: %s id: %s", roomId, req.body.team, req.body.id);
  res.sendStatus(200);
});

module.exports = router;
