const path = require('path');
const fs = require('fs');
const express = require('express');
const notes = require('./db/db.json'); 


const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//HTML 
app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname + '/public/index.html'))});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname + '/public/notes.html'))});
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err,data) => {
        if (err) throw err;
        console.log(data);
    })
});
app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`)});