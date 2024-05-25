import { useState } from "react";
import PropTypes from "prop-types";

PersonForm.propTypes = {
  addPerson: PropTypes.func.isRequired,
};

function PersonForm({ addPerson }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(newName, newNumber);
    setNewNumber("");
    setNewName("");
  };

  return (
    <form>
      <div>
        name:
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number:
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          add
        </button>
      </div>
    </form>
  );
}

export default PersonForm;
