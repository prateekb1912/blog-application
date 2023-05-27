const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
    const locals = {
        title: "NodeJS Blog",
        description: "Blog application with NodeJS, Express and MongoDB with frontend in EJS"
    }

    res.render('index', locals)
});

module.exports = router;
