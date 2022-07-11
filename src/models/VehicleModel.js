const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema =  new Schema({
    "name": {
      "type": "String"
    },
    "description": {
      "type": "String"
    },
    "plate": {
      "type": "String"
    },
    "isFavorite": {
      "type": Boolean,
      "default": false
    },
    "year": {
      "type": "String"
    },
    "color": {
      "type": "String"
    },
    "price": {
      "type": "String"
    },
    "createdAt": {
      "type": Date,
      "default": Date.now
    },
    "brand": {
      "type": "String"
    }
  });


  module.exports = mongoose.model("Vehicle", vehicleSchema);