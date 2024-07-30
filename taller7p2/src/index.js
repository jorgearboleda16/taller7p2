const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const { seedProfiles } = require('./seeder');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', routes);

db.serialize(() => {
  seedProfiles();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});