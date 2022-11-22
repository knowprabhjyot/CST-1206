const Author = require("../model/Author");


// Here we will use async await
const getAllAuthors = async (req, res) => {
    try {
        const data = await Author.find();

        return res.status(200).json({
            message: "Succesfully fetched all Authors",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error",
            error
        })
    }
}


// Here we will use async await
const getAuthorById = async (req,res) => {
    const id = req.params.id;
   
    try {
        const data = await Author.findById(id);

        return res.status(200).json({
            message: "Succesfully fetched author for given ID",
            data
        })
    
    } catch (error) {
        return res.status(500).json({
            message: "There was an error",
            error
        })
    }
}


// Here we will use then and catch
const createAuthor = (req, res) => {
    const incomingData = req.body;

    const newAuthor = new Author({
        name: incomingData.name,
        email: incomingData.email,
        contact: incomingData.contact
    })

    newAuthor.save().then((data) => {
        return res.status(201).json({
            message: "Author Sucesfully created",
            data
        })
    }).catch((error) => {
        return res.status(500).json({
            message: "THere was an error",
            error
        })
    })

    // const data = await mewAuthor.save()
}

// Here we will use then and catch
const deleteAuthor = (req, res) => {
    const id = req.params.id;

    Author.findByIdAndDelete(id).then((response) => {
        return res.status(200).json({
            message: "Author Sucesfully deleted",
            data
        })
    }).catch((error) => {
        return res.status(500).json({
            message: "THere was an error",
            error
        })
    })
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    deleteAuthor
}

