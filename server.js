const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
    );

// GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
    );

// GET Route for reading and returning saved notes as JSON
app.get('/api/notes', (req, res) => res.json(notes));

// POST Route for saving a new note to the db.json file
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = notes.length.toString();
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '/db/db.json'),
        JSON.stringify({ notes }, null, 2)
        );
    res.json(notes);
    }

    app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);