const express = require('express');
const { response } = require('express');
const app = express();

app.use(express.json())

let persons = [
    {
        id: 1,
        name: "Hester",
        number: "03131"
    },
    {
        id: 2,
        name: "Tom",
        number: "011231"
    },
    {
        id: 3,
        name: "Wren",
        number: "03s31"
    }
];

app.get('/', (request, response) => {
    response.send("<h1>Hello There</h1>");
});

app.get('/api/persons', (request, response) => {
    response.json(persons);
});

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(person => person.id === id);
    
    if (person) {
        response.json(person);
    } else {
        response.status(404).end();
    }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);

    persons.filter(person => person.id !== id);

    res.status(204).end();
});

const generateID = () => {
    return Math.floor(Math.random() * 100000);
};

app.post('/api/persons', (request, response) => {
    const newPerson = request.body;
    const match = persons.filter(person => person.name.includes(newPerson.name)).length > 0 ? true : false;

    if (!newPerson) {
        response.status(404).json({ error: 'content missing'});
    } else if (!newPerson.name || !newPerson.number) {
        response.status(404).json({error: "Missing Name or Number"})
    } else if (match) {
        response.status(404).json({error: "Person already exists"});
    } else {
        const person = {
            name: newPerson.name,
            number: newPerson.number,
            id: generateID()
        }

        persons = persons.concat(person);

        response.json(person);
    }
})

app.get('/info', (request, response) => {
    const personsSum = persons.length;
    response.send(`<p>Phonebook has ${personsSum} persons</p><p>${Date()}</p>`)
})



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});