import { useState } from "react";
import { useHomePageContext } from "../store";

export default function FilterBarPlatform() {
    const { handleSetPlatform, platform } = useHomePageContext() as any;

    const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleSetPlatform(e.target.value);
      };
    
    return (
        <div className='filter-bar__wrapper'>
            <small className='filter-bar__text'>Filter by platform:</small>
            <select
                className="filter-bar__platform"
                value={platform}
                onChange={handlePlatformChange}
                defaultValue="all"
            >
                <option value="">Select Platform</option>
                <option value="all">All</option>
                <option value="pc">PC</option>
                <option value="browser">Browser</option>
            </select>
        </div>
    )
}