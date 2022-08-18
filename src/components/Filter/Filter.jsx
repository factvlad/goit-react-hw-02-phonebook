import PropTypes from 'prop-types';
import s from "../Contacts.module.scss"

function Filter({ searchName }) {
  return (
    <input
      type="text"
      className={ s.input }
      name="filter"
      placeholder="Serch Contacts"
      onChange={ searchName }
    />
  );
}

export default Filter;

Filter.propTypes = {
  searchName: PropTypes.func.isRequired,
}
