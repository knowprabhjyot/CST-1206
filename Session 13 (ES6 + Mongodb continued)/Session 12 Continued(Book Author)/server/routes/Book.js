const express = require("express");
const router = express.Router();
const BookController = require("../controller/book");

router.get("/", BookController.getAllBooks);

router.get("/:id", BookController.getBookById);

router.post("/", BookController.createBook);

router.delete("/:id", BookController.deleteBook);

module.exports = router;