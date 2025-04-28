
const express = require('express');
const _ = require('lodash');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const users = [{ name: 'Alice' }, { name: 'Bob' }];
    const names = _.map(users, 'name');
    res.send(`Hello users: ${names.join(', ')}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
