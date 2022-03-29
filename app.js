const express = require('express');
const cors = require('cors');
var app = new express();
app.use(cors);
app.use(express.json());