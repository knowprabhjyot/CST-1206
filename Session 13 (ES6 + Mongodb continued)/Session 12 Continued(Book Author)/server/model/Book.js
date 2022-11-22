const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    }
}, {
    timestamps: true
});

const BookModel = mongoose.model("Book", BookSchema);


module.exports = BookModel;

// relations

// One to One - 
// 1 Author --> 1 Book
// 1 Book --> 1 Author

// One to Many
// 1 Author --> Many Books
