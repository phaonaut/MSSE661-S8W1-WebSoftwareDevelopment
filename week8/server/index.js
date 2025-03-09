const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000; // PORT=X npm start

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});