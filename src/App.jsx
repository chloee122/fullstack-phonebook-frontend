import { useState, useEffect } from "react";
import FilterForm from "./components/FilterForm";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import personService from "./services/persons";
import Notification from "./components/Notification";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterString, setFilterString] = useState("");
  const [sucessfulMessage, setSucessfulMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialData) => {
      setPersons(initialData);
    });
  }, []);

  const addPerson = async (name, number) => {
    const personExists = persons.find((p) => p.name === name);

    if (personExists) {
      const confirm = window.confirm(
        `${name} is already added to phonebook, replace the old number with a new one?`
      );
      if (!confirm) return;

      const updatedPerson = {
        ...personExists,
        number: number,
      };

      await personService
        .update(personExists.id, updatedPerson)
        .then((returnedPerson) => {
          if (!returnedPerson)
            throw new Error(`${name} was already removed from server`);
          setPersons(
            persons.map((person) =>
              person.id !== personExists.id ? person : returnedPerson
            )
          );
          setSucessfulMessage(`Updated ${name}`);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setTimeout(() => setErrorMessage(null), 3000);
          setPersons(persons.filter((p) => p.id !== personExists.id));
        });
    } else {
      await personService
        .create({
          name,
          number,
        })
        .then((res) => {
          setPersons([...persons, res]);
          setSucessfulMessage(`Added ${name}`);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setTimeout(() => setErrorMessage(null), 3000);
        });
    }
    setTimeout(() => setSucessfulMessage(null), 3000);
  };

  const deletePerson = async (id, name) => {
    try {
      const confirm = window.confirm(`Delete ${name}?`);
      if (!confirm) return;
      await personService.remove(id);
      setPersons(persons.filter((p) => p.id !== id));
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const personsToShow = filterString
    ? persons.filter((p) => p.name.toLowerCase().includes(filterString))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        sucessfulMessage={sucessfulMessage}
        errorMessage={errorMessage}
      />
      <FilterForm
        filterString={filterString}
        setFilterString={setFilterString}
      />
      <PersonForm addPerson={addPerson} />
      <h2>Numbers</h2>
      <PersonsList personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
