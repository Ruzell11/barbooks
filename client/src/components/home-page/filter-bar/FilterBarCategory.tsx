import React, { useEffect, useState } from "react";
import { useHomePageContext } from "../store";
import LoadingSpinner from "../../spinner";

const FilterBarCategory = () => {
  const { queryCategoryList, handleSetCategory, category } = useHomePageContext() as any;
  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleCategorySelect = (category: string) => {
    if (!selectedCategories.includes(category)) {
      const updatedCategories = [...selectedCategories, category];
      setSelectedCategories(updatedCategories);
      handleSetCategory(category);
    }
    setSearchText("");
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');

    if (categoryParam) {
        const categoriesFromUrl = categoryParam.split(',');
        setSelectedCategories(categoriesFromUrl);
    } else {
        setSelectedCategories([]);
    }
}, [location.search]);


  const handleCategoryRemove = (category: string) => {
    const updatedCategories = selectedCategories.filter((item) => item !== category);
    setSelectedCategories(updatedCategories);
    handleSetCategory(updatedCategories);
  };

  
  if (queryCategoryList.isLoading) {
    return <LoadingSpinner />
  }

  const filteredCategories = queryCategoryList.data.filter(
    (category: string) => category.toLowerCase().includes(searchText.toLowerCase()) && !selectedCategories.includes(category)
  );


  return (
    <div className="filter-bar__wrapper">
      <small className="filter-bar__text">Filter by Category:</small>
      <div className="filter-bar__input-wrapper">
        <input
          className="filter-bar__input"
          type="text"
          placeholder="Start typing..."
          value={searchText}
          onChange={handleInputChange}
        />
        {filteredCategories.length > 0 && (
          <ul className="filter-bar__dropdown">
            {filteredCategories.map((category: string) => (
              <li
                key={category}
                className="filter-bar__dropdown-item"
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="filter-bar__selected-categories">
        {selectedCategories.map((category) => (
          <span key={category} className="filter-bar__tag">
            {category}
            <button
              className="filter-bar__tag-remove"
              onClick={() => handleCategoryRemove(category)}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterBarCategory;
