const path = require('path');
const fs = require('fs');
const express = require('express');
const notes = require('./db/db.json'); 


const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname + '/public/index.html'))});
app.get('/api/notes', (req, res) => {res.json(notes)});
app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`)});