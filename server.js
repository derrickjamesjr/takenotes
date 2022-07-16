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
    res.sendFile(path.join(__dirname, '/public/index.html'))});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))});
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', "utf8", (err,data) => {
        const note = JSON.parse(data);
        if (err) throw err;
        //console.log(data);
        res.json(note);
    })
});
app.post('/api/notes', (req, res) => {
    console.log(req.body);
})
app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`)});