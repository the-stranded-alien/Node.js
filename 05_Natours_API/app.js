const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // res.status(200).send('Hello From Express Server !!');
  res.status(200).json({
    message: 'Hello From Express Server !!',
    app: 'Natours',
  });
});

app.post('/', (req, res) => {
  res.send('You can Post to this Endpoint !');
});

const port = 8888;
app.listen(port, () => {
  console.log(`App Running on Port: ${port}...`);
});
