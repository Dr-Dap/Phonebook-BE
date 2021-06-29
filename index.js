const express = require('express');
const app = express();

app.use(express.json());

app.get('api/phonebook', (request, response) => {
    response.json(contacts);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});