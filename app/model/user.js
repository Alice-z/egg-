module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    userName: String ,
    passWord: String ,
  });
  return mongoose.model('User', UserSchema);
};
