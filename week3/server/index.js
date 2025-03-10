const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static('public'));
// console.log(__dirname);
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/src'));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});