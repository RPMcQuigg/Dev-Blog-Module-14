// server.js

const express = require('express');
const session = require('./config/session');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session);

// Serve static assets
app.use(express.static('client/public'));

// Use routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
