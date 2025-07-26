const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/spin', (req, res) => {
  const outcomes = ['Charizard Pack', 'Elite Box', 'Mystery Prize', 'Geen prijs'];
  const result = outcomes[Math.floor(Math.random() * outcomes.length)];
  res.json({ prize: result });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));