const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection(process.env.MONGO_URI);

autoIncrement.initialize(connection);

// Define Schemes
const userSchema = new mongoose.Schema({
  userId: { type: String, unique: true, required: true, index: true },
  email: { type: String, required: false },
  name: { type: String, default: "" },
  address: { type: String, default: "" }, 
  phone: { type: String, default: "" },
  deleteYN: {type: Boolean, default: false},
  insertedDate: {type: Date, default: Date.now}
},
{
  timestamps: true
});

userSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'userId', startAt: 0,  incrementBy: 1});
  
userSchema.statics.findAll = function () {

  // var User = connection.model('User', userSchema);
  // var user = new User();
  // user.resetCount(function(err, nextCount) {});
  return this.find({});
};

userSchema.statics.deleteByUserId = function (userId) {
  return this.findOneAndDelete({ userId: userId });
};
  
module.exports = mongoose.model('User', userSchema);