const express = require('express');

const app = express();

const PORT = 5100;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.info(`your app is running at http://localhost:${PORT}`);
});
