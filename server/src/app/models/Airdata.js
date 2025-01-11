const mongoose = require('mongoose');

const AirdataSchema = new mongoose.Schema({
  id: Number,
  data: Array,
});

module.exports = mongoose.model('Airdata', AirdataSchema);
