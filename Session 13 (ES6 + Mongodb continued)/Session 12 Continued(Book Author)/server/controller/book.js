const Book = require("../model/Book");

// then catch
const getAllBooks = (req, res) => {
    Book.find().populate({
        path: "author"
    }).then((data) => {
        return res.status(200).json({
            message: "Succesfully fetched all books",
            data
        })
    }).catch((error) => {
        return res.status(500).json({
            message: "There was an error",
            error
        })
    })
}

// then catch
const getBookById = (req, res) => {
    const id = req.params.id;

    Book.findById(id).populate({
        path: "author"
    }).then((data) => {
        return res.status(200).json({
            message: "Succesfully fetched book by ID",
            data
        })
    }).catch((error) => {
        return res.status(500).json({
            message: "There was an error",
            error
        })
    })
}

// async await
const createBook = async (req, res) => {
    const incomingData = req.body;

    const newBook = new Book({
        title: incomingData.title,
        author: incomingData.author,
        description: incomingData.description
    })

   try {
    const data = await newBook.save();
    return res.status(201).json({
        message: "Succesfully created book",
        data
    })
   } catch (error) {
    return res.status(500).json({
        message: "There was an error",
        error
    })
   }

}


// async await
const deleteBook = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Book.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Succesfully deleted book",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error",
            error
        })
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    deleteBook
}