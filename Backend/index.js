require("dotenv").config();
const Person = require("./models/person");
const express = require("express");
const app = express();

//static
app.use(express.static("Build"));

//json parser
app.use(express.json());

//morgan logger
const morgan = require("morgan");
morgan.token("json-data", (req) => {
    return JSON.stringify(req.body);
});

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :json-data"));

//get

app.get("/api/persons", (req, res) => {
    Person.find({}).then(result => {
        res.json(result);
    });
});

app.get("/api/persons/:id", (req, res) => {
    Person.findById(req.params.id)
        .then(person => {
            res.json(person);
        })
        .catch(error => {
            console.log(error);
            res.status(404).end();
        });
});

app.get("/info", (req, res) => {
    Person.find({}).then(result => {
        res.send(`
            <p>Phonebook has info for ${result.length} people</p>
            <p>${new Date(Date.now()).toString()}</p>
        `);
    });
});

//delete

app.delete("/api/persons/:id", (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).end();
        }).catch(error => {
            next(error);
        });
});

//post

app.post("/api/persons", (req, res, next) => {
    const body = req.body;

    new Person ({
        name: body.name,
        number: body.number
    }).save().then(re => {
        res.json(re);
    }).catch(error => next(error));
});

//put

app.put("/api/persons/:id", (req, res, next) => {
    const body = req.body;

    Person.findByIdAndUpdate(req.params.id, {
        name: body.name,
        number: body.number
    }, {runValidators: true, context: "query"}).then(updatedPerson => {
        res.json(updatedPerson);
    }).catch(error => {next(error);});
});

//rest of app

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, req, res, next) => {
    console.error(error.message);

    switch (error.name) {
    case "CastError":
        return res.status(400).send({ error: "malformatted id" });
    case "ValidationError":
        return res.status(400).json({ error: error.message, name: error.name });
    default:
        res.status(400).send({error: "unkown error"});
    }

    next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});