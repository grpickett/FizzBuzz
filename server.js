// server.js
const express = require('express');
const computeFizzBuzz = require('./middleware');

const app = express();
app.use(express.json());

app.post('/fizzbuzz', computeFizzBuzz, (req, res) => {
    const { results } = req;
    res.json({ results });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
