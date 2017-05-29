var express = require('express');
var router = express.Router();

var numRenders = 0;

/* GET users listing. */
router.get('/:roomId', function(req, res, next) {
  console.log("serving room %s", req.params.roomId);
  numRenders = numRenders + 1;
  console.log("rendered %d times", numRenders);

  res.render('room', { title: 'Room ' + req.params.roomId, numRenders: numRenders });
});

module.exports = router;
