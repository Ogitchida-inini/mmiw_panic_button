const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

app.post('/alert', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const ua = req.headers['user-agent'];
  const ts = new Date().toISOString();
  fs.appendFileSync('log.txt', `${ts} | ${ip} | ${ua}\n`);
  res.end();
});

const port = 3000;
app.listen(port, () => console.log(`🔐 Panic button live on port ${port}`));
