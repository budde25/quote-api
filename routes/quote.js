var express = require('express');
const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  const mod = tf.models.modelFromJSON('/model.json');
  const model = tf.sequential();


  res.send('respond with a resource');
});

module.exports = router;
