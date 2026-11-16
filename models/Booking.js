const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventType: { type: String, required: true },
  eventDate: { type: String, required: true },
  eventTime: { type: String, required: true },
  venueAddress: { type: String, required: true },
  guestCount: { type: Number, required: true },
  selectedMenus: [
    {
      foodItem: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
      name: String,
      pricePerPlate: Number,
      quantity: Number,
      subtotal: Number
    }
  ],
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Paid' },
  bookingStatus: { type: String, enum: ['Confirmed', 'Completed', 'Cancelled'], default: 'Confirmed' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);