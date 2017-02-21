const express = require('express');

const app = express();

const PORT = process.env.PORT || 5100;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  }
  next();
})

app.use(express.static('public'));

app.listen(PORT, () => {
    console.info(`your app is running at http://localhost:${PORT}`);
});
