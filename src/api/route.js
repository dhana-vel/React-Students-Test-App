const express = require('express');
const httpRoutes = express.Router();

// Require Business model in our routes module
let Data = require('./data');

// get data from the list
httpRoutes.route('/').get((req, res) => {
  Data.Items.find((err, items) => {
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

//add
httpRoutes.route('/add').post((req, res) => {
  let data = new Data.Items(req.body);
  data.save()
  .then(response => {
    res.status(200).json({'school': 'data in added successfully'});
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
});

//delete
httpRoutes.route('/delete/:id').get((req, res) => {
  Data.Items.findByIdAndRemove({_id: req.params.id}, (err, response) => {
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

//edit
httpRoutes.route('/edit/:id').get((req, res) => {
  let id = req.params.id;
  Data.Items.findById(id, (err, result) => {
      res.json(result);
  });
});


//update
httpRoutes.route('/update/:id').post((req, res) => {
  Data.Items.findById({_id: req.params.id}, (err, response) => {
    if (!response)
      res.status(404).send("data is not found");
    else {
        response.id = req.body.id;
        response.name = req.body.name;
        response.age = req.body.age;

        response.save().then(response => {
          res.json('Successfully updated');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

httpRoutes.route('/signup').post((req, res) => {
  let data = new Data.LoginUsers(req.body);
  data.save()
  .then(response => {
    res.status(200).json({'school': 'signup data in added successfully'});
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
});

module.exports = httpRoutes;