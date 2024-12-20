import { useState } from "react";
import { useHomePageContext } from "../store";

export default function FilterBarSortBy() {
    const { handleSetSortBy, sortBy } = useHomePageContext() as any;

    const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleSetSortBy(e.target.value);
    };

    return (
        <div className='filter-bar__wrapper'>
            <small className='filter-bar__text'>Sort by:</small>
            <select
                className="filter-bar__sort-by"
                value={sortBy}
                onChange={handleSortByChange}
            >
                   <option value="">Select Option</option>
                <option value="release-date">Release Date</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="relevance">Relevance</option>
            </select>
        </div>
    )
}