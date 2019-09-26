//var mongodb = require('mongodb');
//var mongoClient = mongodb.MongoClient;
const mongoose = require('mongoose');
const dataRoute = require('./route');

// Require Business model in our routes module
//const Data = require('./data');

const express = require('express');
//const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
//const path = require('path');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//const appPage = path.join(__dirname, '../../public/index.html')

var url = 'mongodb://someuser:dhana123@ds119489.mlab.com:19489/studentsdb';
//const client = new mongoClient(url, options);
mongoose.Promise = global.Promise;

mongoose.connect(url, options).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.sendFile(appPage);
// });

// this method fetches all available data in our database
// router.get('/getData', (req, res) => {
//     Data.find((err, data) => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true, data: data });
//     });
// });

app.use('/school', dataRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});

// client.connect(err => {
//   if(err) {
//      console.log(err);
//      process.exit(0);
//   }
//   let data = [{
//      "id": 100,
//       "name": "Shahid"
//   },{
//       "id": 101,
//       "name": "Rahil"
//   },{
//       "id": 102,
//       "name": "John"
//   }];
//   var dbo = client.db('studentsdb');
//   console.log('database connected!');
//   var collection = dbo.collection('collect1');
//   collection.insertMany(data, (err, result) => {
//       if(err) {
//           console.log(err);
//           process.exit(0);
//       }
//       console.log(result);
//       client.close();
//   });
// });