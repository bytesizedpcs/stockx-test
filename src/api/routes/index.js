const express = require('express');
const router = express.Router();
const { 
  getAllShoes,
  getShoeById, 
  createShoe, 
  getShoeSizesArrayById, 
  addShoeSizeToArray,
} = require('./utils/shoe');

router.get('/', getAllShoes);
router.get('/:id', getShoeById);
router.post('/', createShoe);
router.put('/:id&:size', addShoeSizeToArray);
router.get('/sizes/:id', getShoeSizesArrayById)

router.use('/docs', express.static('docs'));

module.exports = router;
