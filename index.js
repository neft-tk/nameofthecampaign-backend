const express = require('express');
const routes = require('./routes');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(express.static('public'));



app.listen(PORT, () =>
 console.log(`App listening at http://localhost:${PORT} 🚀`)
);