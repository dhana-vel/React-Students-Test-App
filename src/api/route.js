const express = require('express');
const httpRoutes = express.Router();

// Require Business model in our routes module
let Data = require('./data');

// get data from the list
httpRoutes.route('/').get((req, res) => {
  Data.find((err, businesses) => {
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

//add
httpRoutes.route('/add').post((req, res) => {
  let data = new Data(req.body);
  data.save()
  .then(business => {
    res.status(200).json({'school': 'data in added successfully'});
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
});

//delete
httpRoutes.route('/delete/:id').get((req, res) => {
  Data.findByIdAndRemove({_id: req.params.id}, (err, business) => {
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

module.exports = httpRoutes;