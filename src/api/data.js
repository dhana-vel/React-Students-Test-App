// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
let Items = new Schema(
  {
    id: {
      type: Number
    },
    name: {
      type: String
    },
    age: {
      type: Number
    }
  }
  //{ collection: 'collect1' }
);

let LoginUsers = new Schema(
  {
    user_name: {
      type: String
    },
    user_password: {
      type: String
    }
  }
  //{ collection: 'collect1' }
);


let data = mongoose.model('Items', Items, 'collect1');
//let user = mongoose.model('LoginUsers', LoginUsers, 'collect1'); /* multiple schema in one collection */
let user = mongoose.model('LoginUsers', LoginUsers, 'collect2');

// export the new Schema so we could modify it using Node.js
//module.exports = mongoose.model('Data', Data);

module.exports = {
  Items: data,
  LoginUsers: user
};