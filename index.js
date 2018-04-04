const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 6969;

const app = express();

app.use(cors());

app.get('/api/get-stuff', (req, res) => {
    res.send({success: true, message: 'Data from the backend'});
});

app.get('/', (req, res) => {
    res.send('<h1>We out here FAMS</h1>')
});

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});