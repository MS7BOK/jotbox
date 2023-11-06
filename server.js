const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('develop/public')); // Adjusted the static file path

let notes = [];

app.get('/notes', (_req, res) => {
  res.sendFile(path.join(__dirname, 'develop', 'public', 'notes.html')); // Adjusted the file path
});

app.get('/api/notes', (_req, res) => {
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

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'develop', 'public', 'index.html')); // Adjusted the file path
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
