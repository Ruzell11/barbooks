import React, { useState } from 'react';
import './index.css';

export default function HomePageFilterBar() {
  const [platform, setPlatform] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlatform(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="filter-bar">

      <div className='filter-bar__wrapper'>
        <small className='filter-bar__text'>Filter by platform:</small>
        <select
          className="filter-bar__platform"
          value={platform}
          onChange={handlePlatformChange}
        >
          <option value="">Select Platform</option>
          <option value="platform1">Platform 1</option>
          <option value="platform2">Platform 2</option>
          <option value="platform3">Platform 3</option>
        </select>
      </div>

      <div className='filter-bar__wrapper'>
        <small className='filter-bar__text'>Filter by category:</small>
        <select
          className="filter-bar__category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Select Category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>

      </div>

      <div className='filter-bar__wrapper'>
        <small className='filter-bar__text'>Sort by:</small>
        <select
          className="filter-bar__sort-by"
          value={sortBy}
          onChange={handleSortByChange}
        >
          <option value="">Sort By</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

