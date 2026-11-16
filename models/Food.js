const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  pricePerPlate: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, default: 'https://images.unsplash.com/photo-1555244162-803834f70033' }
}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);