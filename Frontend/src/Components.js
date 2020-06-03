import React, {useEffect} from 'react'
import Backend from './Backend'

export const Input = ({ content }) => {
    function handleChange (event) {
        event.preventDefault();
        content.set(event.target.value);
    }

    return (
        <input value={content.value} onChange={handleChange}/>
    )
}

export const UserDisplay = ({person, all, notification}) => {
    const deleteHandler = () => {
        if (!window.confirm(`Delete ${person.name} from phonebook?`)) {
            return;
        }

        Backend.deleteNumber(person.id);

        let newArray = [...all.value];
        let deletedPerson = newArray.splice(all.value.indexOf(all.value.find(p => p.id === person.id)), 1)
        all.set(newArray);

        notification.set(`Successfully deleted ${deletedPerson[0].name} from phonebook`);
    }

    return (
        <div>
            <span>{person.name} {person.number}  </span>
            <button onClick={deleteHandler}>Delete</button>
            <br />
        </div>
    )
}

export const Notification = ({ message }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (message.value !== null) {
                message.set(null);
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, [message]);

    if (message.value === null) {
        return null
    }

    return (
        <div className="notification">
            {message.value}
        </div>
    )
}

export const Error = ({error}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (error.value !== null) {
                error.set(null);
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, [error]);

    if (error.value === null) {
        return null
    }

    return (
        <div className="error">
            {error.value}
        </div>
    )
}