const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()},
    role: String,
    is_blocked: {type: Boolean, default: false},
    last_login_time: {type: Date, default: Date.now()}
});


let UserModel = mongoose.model("user", UserSchema);


module.exports = {UserSchema, UserModel};
