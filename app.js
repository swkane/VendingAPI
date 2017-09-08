const express = require('express');
const app = express();
const models = require('./models');
const routes = require('./routes')

// const api = express.Router();
//
// app.use('/api', api);
// api.get('/customer/items', (req, res) => {
//   // send message here
// })

const item = models.Item.build({
  name: 'coke',
  cost: 99,
  quantity: 5
});

item.save().then(function(newItem) {
  console.log(newItem);
});

app.use(routes);


app.listen(3000, () => console.log('Vending Machine API Running on localhost:3000'));
