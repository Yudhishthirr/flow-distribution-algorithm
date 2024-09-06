import express from "express"
// const { Astrologer, allocateUsersToAstrologers } = require('./algorithm');
import {  allocateUsersToAstrologers } from "./algorithm.js"
const app = express();
app.use(express.json());

let astrologers = [];
let users = [];

// Get all astrologers
app.get('/astrologers', (req, res) => {
  res.json(astrologers);
});

// Allocate users to astrologers
app.post('/allocate', (req, res) => {
  const result = allocateUsersToAstrologers(users, astrologers);
  res.json(result);
});

// Toggle top astrologer status
app.patch('/astrologers/:id/toggle', (req, res) => {
  const astrologerId = req.params.id;
  const astrologer = astrologers.find(a => a.id === astrologerId);
  
  if (!astrologer) {
    return res.status(404).json({ message: 'Astrologer not found' });
  }

  astrologer.isTopAstrologer = !astrologer.isTopAstrologer;
  astrologer.multiplier = astrologer.isTopAstrologer ? 2 : 1;
  res.json(astrologer);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
