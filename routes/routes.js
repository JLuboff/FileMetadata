"use strict";
const express_1 = require("express");
const multer = require("multer");
const router = express_1.Router();
const storage = multer.diskStorage({});
const upload = multer({ storage });
router
    .route("/")
    .post(upload.single("filemetadata"), async (req, res, next) => {
    try {
        const { size: fileSize } = req.file;
        res.send(fileSize);
    }
    catch (error) {
        return next(error);
    }
});
module.exports = router;
