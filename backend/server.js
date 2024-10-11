const express = require('express');
const cors = require('cors');
const axios = require('axios')
const app = express();


app.use(cors());
app.use(express.json());

app.get('/api/random-joke', async (req, res) => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching joke', error);
        res.status(500).json({ error: 'Error fetching joke' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});