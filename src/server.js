const express = require('express');
const expressStatic = require('express').static;
const { join } = require('node:path');

const app = express();
const port = 12345;

app.use(expressStatic(__dirname));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});