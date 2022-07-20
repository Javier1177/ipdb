import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './searchBox.styles.scss';

const SearchBox = () => {
  return (
    <div className='searchbox-container'>
      <label className='searchbox-icon' htmlFor='search-pokemon'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
      <input
        type='search'
        className='searchbox-input'
        id='search-pokemon'
        spellCheck='false'
        placeholder='Search for a pokemon...'
      />
    </div>
  );
};

export default SearchBox;
