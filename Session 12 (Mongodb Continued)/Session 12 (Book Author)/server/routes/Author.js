const express = require("express");
const router = express.Router();
const AuthorController = require("../controller/author");

// api/v1/authors/
// getAllAuthors is a handler that is coming from Controllers
router.get('/', AuthorController.getAllAuthors);

// api/v1/authors/:id
router.get("/:id", AuthorController.getAuthorById);

router.post("/", AuthorController.createAuthor);

router.delete("/:id", AuthorController.deleteAuthor);

module.exports = router;