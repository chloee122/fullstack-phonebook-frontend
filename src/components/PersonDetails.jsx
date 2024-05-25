import PropTypes from "prop-types";

PersonDetails.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deletePerson: PropTypes.func.isRequired,
};

function PersonDetails({ name, number, id, deletePerson }) {
  return (
    <div>
      {name} {number}
      <button onClick={() => deletePerson(id, name)}>Delete</button>
    </div>
  );
}

export default PersonDetails;
