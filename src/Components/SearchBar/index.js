import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SearchBar = ({onSearch}) => {
  let textInput;
  function search() {
    onSearch(textInput.value);
  }

  return (
    <form className='search-form'>
      <input
        className='search-input'
        ref={input => textInput = input}
        type='text'
        onInput={search}
      />
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func
};

export default SearchBar;
