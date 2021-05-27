const mongoose = require('mongoose') //引入Mongoose
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
  UserId: ObjectId,
  username: { unique: true, type: String },
  password: String,
  createAt: { type: Date, default: Date.now() },
  lastLoginAt: { type: Date, default: Date.now() }
}, {
  collection: 'user'
})
let SALT_WORK_FACTOR = 5
//每次存储数据时都要执行 加密密码
userSchema.pre('save', function (next) {
  var user = this;
  //产生密码hash当密码有更改的时候(或者是新密码)
  if (!user.isModified('password')) return next();
  // 产生一个salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);
    //  结合salt产生新的hash
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      // 使用hash覆盖明文密码
      user.password = hash;
      next();
    });
  });
});
userSchema.methods = {
  //密码比对的方法
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => {
        if (!err) resolve(isMatch)
        else reject(err)
      })
    })
  }
}


//发布模型
mongoose.model('User', userSchema)