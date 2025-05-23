const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Statische Dateien aus dem docs-Ordner ausliefern
app.use(express.static(path.join(__dirname, 'docs')));

app.listen(PORT, () => {
  console.log(`🚀 Server läuft unter http://localhost:${PORT}`);
});
