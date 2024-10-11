const express= require('express');
const app = express();
const dotenv= require('dotenv');
const notes= require('./data/notes');
dotenv.config();

app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});
app.get('/api/notes/:id', (req, res) => {
    res.json(notes.find((n) => n._id === req.params.id));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));