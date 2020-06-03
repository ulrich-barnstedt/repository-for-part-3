import React, {useEffect, useState} from 'react'
import Backend from './Backend'

//other subcomponents
import {Input, UserDisplay, Notification, Error} from './Components'

const PersonForm = ({person, number, name, notification, error}) => {
    async function submitHandler (event) {
        event.preventDefault();

        //check if inputs are empty
        if (name.value === "" || name.value === " " || number.value === "" || number.value === " ") {
            alert("Name/number is empty.");
            return;
        }

        //check if name exists already
        let testArray = person.value.map(p => p.name.toLowerCase());
        if (testArray.includes(name.value.toLowerCase())) {
            if (window.confirm(`${name.value} is already in the phone book. Replace the number with a the new one?`)) {
                //get index of the target person
                let index = person.value.indexOf(person.value.find(p => p.name.toLowerCase() === name.value.toLowerCase()));

                //update the backend
                let failed = false;
                await Backend.updateNumber(person.value[index].id, {...person.value[index], number: number.value}).catch((e) => {
                    if (e.response.data.name === "ValidationError") {
                        error.set(e.response.data.error);
                    } else {
                        error.set("Could not update person in phonebook. This person might have already been deleted.");
                    }

                    failed = true;
                });
                if (failed === true) {
                    return;
                }

                //update local list
                let updateList = [...person.value];
                updateList[index].number = number.value;
                person.set(updateList);

                notification.set(`Updated number of ${name.value}`);

                name.set("");
                number.set("");
                return;
            } else {
                return;
            }
        }

        //generate object
        const newPerson = {
            name: name.value,
            number: number.value
        }
        name.set("");
        number.set("");

        //add to backend
        Backend.createNumber(newPerson).then(r => {
            person.set(person.value.concat(r.data));
            notification.set(`Added ${newPerson.name} to phonebook`);
        }).catch(e => {
            if (e.response.data.name === "ValidationError") {
                error.set(e.response.data.error);
            }
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    name: <Input content={name}/>
                    <br />
                    number: <Input content={number}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

const Filter = ({filter}) => {
    return (
        <div>
            show only names containing <Input content={filter}/>
        </div>
    )
}

const NumberList = ({person, filter, notification}) => {
    let filteredList = person.value.filter(p => p.name.toLowerCase().includes(filter.value.toLowerCase()));

    return (
        <div>
            {filteredList.map(p => {
                return <UserDisplay key={p.name} person={p} all={person} notification={notification}/>
            })}
        </div>
    )
}

//------ Main App Component

const App = () => {
    function stateObject (state) {
        return {
            value : state[0],
            set : state[1]
        }
    }

    //all people in phone book
    const person = stateObject(useState([]));

    //form hooks
    const name = stateObject(useState(''));
    const number = stateObject(useState(''));

    //filter hook
    const filter = stateObject(useState(''));

    //notification and error hook
    const notification = stateObject(useState(null));
    const error = stateObject(useState(null));

    //effect hook for loading from server
    const effectHook = () => {
        Backend.fetchAllNumbers().then(r => {
            person.set(r);
        })
    }
    useEffect(effectHook, []);

    return (
        <div>
            <h2>Phonebook</h2>

            <Error error={error} />
            <Notification message={notification} />

            <Filter filter={filter}/>

            <h3>Add a new number</h3>
            <PersonForm person={person} name={name} number={number} notification={notification} error={error}/>

            <h3>Numbers</h3>
            <NumberList person={person} filter={filter} notification={notification}/>
        </div>
    )
}

export default App