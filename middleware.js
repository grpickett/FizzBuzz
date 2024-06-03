// middleware.js
const fizzBuzz = require('./logic');

function computeFizzBuzz(req, res, next) {
    const { values } = req.body;
    const results = [];

    if (!Array.isArray(values)) {
        res.status(400).json({ error: 'Invalid input. Please provide an array.' });
        return;
    }

    values.forEach(value => {
        let result;
        if (typeof value !== 'number' || isNaN(value)) {
            result = `Invalid item: ${value}`;
        } else {
            result = fizzBuzz(value);
        }
        results.push(result);
    });

    req.results = results;
    next();
}

module.exports = computeFizzBuzz;
