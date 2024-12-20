import { useHomePageContext } from "../store"

export default function ClearFilter(){
    const { handleClearFilters } = useHomePageContext() as any;
    return (
        <button onClick={handleClearFilters} className="clear-filters-btn">
    Clear Filters
</button>

    )
}