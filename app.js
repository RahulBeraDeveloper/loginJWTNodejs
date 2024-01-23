// app.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 8080;
;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
