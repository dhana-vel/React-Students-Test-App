// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
let Data = new Schema(
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
  },
  { collection: 'collect1' }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model('Data', Data);