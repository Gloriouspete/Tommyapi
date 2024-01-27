const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hi Tommy, Can you see how easy it is');
});

app.get('/getsampletext', (req, res) => {
  res.send('This is an example of get sample route, it looks easy but its not');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
