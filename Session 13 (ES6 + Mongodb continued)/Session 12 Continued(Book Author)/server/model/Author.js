const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const AuthorModel = mongoose.model("Author", AuthorSchema);

module.exports = AuthorModel;