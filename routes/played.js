const express = require('express');
const router = express.Router();
const {
  getPlayed,
  getAllPlayed,
  createPlayed,
  unpdatePlayed,
  deletePlayed,
} = require('../controllers/played');

router.route('/').get(getAllPlayed).post(createPlayed);
router.route('/:id').get(getPlayed).patch(unpdatePlayed).delete(deletePlayed);

module.exports = router;
