const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { type: String, enum: ['admin', 'student'] },
  });
);

module.exports = User;