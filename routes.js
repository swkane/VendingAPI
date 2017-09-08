const express = require('express');
const router = express.Router();
const models = require('./models');

// Index Action
router.get('/customer/items', (req, res) => {
  console.log('You just got a list of items');
  // res.send('List of items');
  // res.json({name: 'coke', cost: 99, quantity: 1});
  models.Item.findAll().then(function(items) {
    res.json({items});
  });
});

router.use('/api', router);
module.exports = router;
