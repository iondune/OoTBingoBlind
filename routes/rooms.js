var express = require('express');
var router = express.Router();

var crypto = require('crypto');
var bs58 = require('bs58')


var numRenders = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var roomId = bs58.encode(crypto.randomBytes(3*4));
  res.redirect(roomId)
});

/* GET users listing. */
router.get('/:roomId', function(req, res, next) {
  var roomId = req.params.roomId;

  console.log("serving room %s", roomId);
  numRenders = numRenders + 1;
  console.log("rendered %d times", numRenders);

  res.render('room', { title: 'Room ' + roomId, numRenders: numRenders, roomId: roomId });
});

module.exports = router;
