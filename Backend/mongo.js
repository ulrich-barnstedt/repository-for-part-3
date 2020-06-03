const mongoose = require("mongoose");
require("dotenv").config();

let set;

const argb = process.argv.slice(2);
if (argb.length < 1) {
    console.error("No password provided.");
    process.exit(1);
} else if (argb.length === 1) {
    set = false;
} else if (argb.length > 2) {
    set = true;
}

let url = `mongodb+srv://${process.env.MONGODB_USER}:${argb[0]}${process.env.MONGODB_DBURL}`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
    name: String,
    number: Number
});

const Person = mongoose.model("Person", personSchema);

if (set) {
    new Person({
        name: argb[1],
        number: argb[2]
    }).save().then(() => {
        console.log(`Person ${argb[1]} with number ${argb[2]} added to phonebook.`);

        mongoose.connection.close();
    });
} else {
    Person.find({}).then(result => {
        console.log("Phonebook: ");
        result.forEach(pr => {
            console.log(`${pr.name} ${pr.number}`);
        });

        mongoose.connection.close();
    });
}