const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.get('/greeting', (req, res) => {
    res.json({ greeting: 'Hello' })
})

app.listen(5000, () => console.log('server has started'))