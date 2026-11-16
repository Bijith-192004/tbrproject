const express = require('express');
const { createBooking, getUserBookings, getAllBookingsAdmin } = require('../controllers/bookingController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const router = express.Router();
router.post('/', protect, createBooking);
router.get('/my-bookings', protect, getUserBookings);
router.get('/admin/all', protect, adminOnly, getAllBookingsAdmin);
module.exports = router;