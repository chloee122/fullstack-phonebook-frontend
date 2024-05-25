import PropTypes from "prop-types";

FilterForm.propTypes = {
  filterString: PropTypes.string.isRequired,
  setFilterString: PropTypes.func.isRequired,
};

function FilterForm({ filterString, setFilterString }) {
  return (
    <div>
      Filter shown with:
      <input
        value={filterString}
        onChange={(e) => setFilterString(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default FilterForm;
