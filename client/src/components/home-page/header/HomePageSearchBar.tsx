import React from 'react';

export default function HomePageSearchBar(){
  return (
    <div className="homepage__search-bar">
      <span className="homepage__search-icon">&#128269;</span> {/* Magnifying glass icon */}
      <input 
        type="text" 
        placeholder="Search by Name..." 
        className="homepage__search-input"
      />
    </div>
  );
}
