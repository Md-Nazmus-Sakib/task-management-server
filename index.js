const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middle wear
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Task Management Server is Running')
})

app.listen(port, () => {
    console.log(`Task Management is running on port: ${port}`)
})
