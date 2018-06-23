const PORT = 3000;
const express = require('express');
const app = express();

require('./configs/db.config');

app.listen(PORT, () => {
    console.info(`App connected to ${PORT} port.`);
});