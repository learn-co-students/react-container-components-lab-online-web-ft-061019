import React from 'react';

const SearchForm = ({ onFormSubmit, onChange, searchTerm }) => {
   return (
      <form onSubmit={onFormSubmit}>
         <input onChange={onChange} type="text" name="searchTerm" id="searchTerm" value={searchTerm} />
         <input type="submit" value="Search" />
      </form>
   );
}

export default SearchForm;
