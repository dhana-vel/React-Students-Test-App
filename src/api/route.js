const express = require('express');
const httpRoutes = express.Router();

// Require data model in our routes module
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

//find user
httpRoutes.route('/user/:name').get((req, res) => {
  Data.LoginUsers.findOne({user_name: req.params.name}, (err, result) => {
    if (result) {
      res.json(result);
    } else {
      res.status(400).send('Username "' + req.params.name + '" is not available');
    }
  });
});

//search
httpRoutes.route('/search/:id').get((req, res) => {
  Data.Items.findOne({id: req.params.id}, (err, result) => {
    if (result) {
      res.json(result);
    } else {
      res.status(500).send("data is not available");
    }
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
  // validate
  Data.LoginUsers.findOne({user_name: req.body.user_name}, (err, result) => {
    if (result) {
      res.status(400).send('Username "' + req.body.user_name + '" is not taken');
    } else {
      let data = new Data.LoginUsers(req.body);
      data.save()
      .then(response => {
        res.status(200).json({'school': 'signup data in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
    }
  });
});

module.exports = httpRoutes;