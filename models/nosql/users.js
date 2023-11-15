const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');


const UserSchema = new mongoose.Schema(
    {
        name: {type: String},
        age: {type: Number},
        email: {type: String, unique: true},
        password: {type: String, select: false},
        role: {type: ["admin", "user"], default: "user"},
        
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey: false, // __v
    }
);
UserSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("users", UserSchema);