import React from 'react';
import { useHomePageContext } from '../store';

export default function HomePageSearchBar() {
  const { handleSearchValue, searchValue } = useHomePageContext() as any;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleSearchValue(value);
  };

  const handleClear = () => {
    handleSearchValue(''); // Clear the search value in the context
  };

  return (
    <div className="homepage__search-bar">
      <span className="homepage__search-icon">&#128269;</span> {/* Magnifying glass icon */}
      <input
        value={searchValue} // Bind to searchValue directly
        onChange={handleChange}
        type="text"
        placeholder="Search by Name..."
        className="homepage__search-input"
      />
      {searchValue && (
        <span
          className="homepage__clear-icon"
          onClick={handleClear}
        >
          &#10005; {/* "X" icon */}
        </span>
      )}
    </div>
  );
}
