// const express = require('express');
// const { v4: uuidv4 } = require('uuid'); // Import uuid
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serve static files from the 'public' directory
// app.use(express.static('public'));

// // Middleware to handle JSON data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const notes = [];

// // API Routes
// // GET /api/notes
// app.get('/api/notes', (req, res) => {
//     // Read db.json and return notes as JSON
//     res.json(notes);
// });

// // POST /api/notes
// app.post('/api/notes', (req, res) => {
//     // Receive new note from req.body, add unique ID, add to notes array, and return the new note as JSON
//     const newNote = {
//         id: uuidv4(), // Generate a unique ID for the new note
//         title: req.body.title,
//         text: req.body.text,
//     };

//     notes.push(newNote);
//     res.json(newNote);
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'));

// let notes = [];

// app.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'notes.html'));
// });

// app.get('/api/notes', (req, res) => {
//   res.json(notes);
// });

// app.post('/api/notes', (req, res) => {
//   const newNote = req.body;
//   newNote.id = notes.length + 1;
//   notes.push(newNote);
//   res.json(newNote);
// });

// app.delete('/api/notes/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   notes = notes.filter((note) => note.id !== id);
//   res.json({ message: 'Note deleted successfully.' });
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

let notes = [];

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = notes.length + 1;
  notes.push(newNote);
  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter((note) => note.id !== id);
  res.json({ message: 'Note deleted successfully.' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
