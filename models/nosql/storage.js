const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema(
    {
        url: {type: String},
        filename: {type: String},
       
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey: false, // __v
    }
);

module.exports = mongoose.model("storage", StorageSchema);