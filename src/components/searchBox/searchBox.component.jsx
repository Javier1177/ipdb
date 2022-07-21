import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useNavigation } from '../../utils/hooks';

import './searchBox.styles.scss';

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState(null);

  const onHandleChange = e => {
    setSearchValue(e.target.value);
  };

  const navigateToPokemon = useNavigation(`/pokemon/${searchValue}`);

  const onHandleSubmit = e => {
    e.preventDefault();
    navigateToPokemon();
  };

  const onHandleKeyDown = event => {
    if (event.key === 'Enter') {
      navigateToPokemon();
    }
  };

  return (
    <div className='searchbox-container'>
      <label
        className='searchbox-icon'
        htmlFor='search-pokemon'
        onClick={searchValue && onHandleSubmit}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
      <input
        type='search'
        className='searchbox-input'
        id='search-pokemon'
        spellCheck='false'
        placeholder='Search for a pokemon...'
        onChange={onHandleChange}
        onKeyDown={searchValue && onHandleKeyDown}
        autoComplete='off'
      />
    </div>
  );
};

export default SearchBox;
