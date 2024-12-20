import React from 'react';
import './index.css';
import FilterBarCategory from './FilterBarCategory';
import FilterBarPlatform from './FilterBarPlatform';
import FilterBarSortBy from './FilterBarSortBy';

export default function HomePageFilterBar() {

  return (
    <div className="filter-bar">
    <FilterBarPlatform/>
     <FilterBarCategory/>
    <FilterBarSortBy/>
    </div>
  );
};

