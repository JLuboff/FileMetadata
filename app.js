'use strict';
const express = require('express');
const multer = require('multer');
const port = process.env.PORT || 8080;
let storage = multer.diskStorage({});
let upload = multer({storage});

const app = express();

app.use(express.static(__dirname + '/public'));

app.post('/', upload.single('filemetadata'), (req,res) => {
  let fileProp = {
    size: req.file.size
  };
  
  res.send(fileProp);
});

app.listen(port);