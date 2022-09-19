const mongoose = require('mongoose');
import User from './user.model.js';
const db = {};
db.user = User;
module.exports = db;