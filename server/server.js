const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Routes will go here

app.listen(5000, () => console.log('Server started on port 5000'));
