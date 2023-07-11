import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({filter, handleInputChange}) => (
  <div className={css.filterSection}>
    <label className={css.filterLabel}>Find contacts by Name </label>
    <input
      className={css.filterName}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleInputChange}
    />
  </div>
);


Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Filter;