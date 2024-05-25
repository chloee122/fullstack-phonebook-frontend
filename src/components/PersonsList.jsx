import PersonDetails from "./PersonDetails";

function PersonsList({ personsToShow, deletePerson }) {
  return personsToShow.map((person, index) => (
    <PersonDetails
      key={index}
      name={person.name}
      number={person.number}
      id={person.id}
      deletePerson={deletePerson}
    />
  ));
}

export default PersonsList;
