
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const moment = require('moment');

const userSchema = new mongoose.Schema({
  email: { 
    type: String,
     unique: true, 
     required: true
     },
  password: { 
    type: String, 
    required: true 
  },
  dob: { type: Date,
     required: true  
    },
  gender: { 
    type: String, enum: ['male', 'female', 'custom'], 
    required: true 
  },
  phone: { 
    type: String, 
    required: true },
  username: { 
    type: String,
     unique: true },
  profileImage: String,
  coverImage: String,
  createdAt: { 
    type: Date,
     default: Date.now },
  otp: String,
  otpExpires: Date,
});

// Custom validation
userSchema.pre('save', async function (next) {
  const user = this;

  // Password hashing
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  // Generate username if not set
  if (!user.username) {
    user.username = 'user' + Math.floor(Math.random() * 1000000);
  }

  next();
});

module.exports = mongoose.model('User', userSchema);
