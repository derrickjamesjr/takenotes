const path = require('path');
const fs = require ('fs');
const express = require('express');
const { notes } = require ('./db/db.json'); 


const PORT = 3000;
const app = express();

app.listen(3000, () => {console.log(`Server running on http://localhost:${PORT}`)});