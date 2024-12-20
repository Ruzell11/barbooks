import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { getAllCategories, getAllFilterGames, getAllGames } from "./services";
import { useNavigate, useLocation } from 'react-router-dom';

interface HomePageProviderInterface {
    children: ReactNode
}

const HomePageContext = createContext(null);

export default function HomePageProvider({ children }: HomePageProviderInterface) {
    const navigate = useNavigate();
    const location = useLocation();

    // State variables
    const [platform, setPlatform] = useState<string>("");
    const [category, setCategory] = useState<string[]>([]);
    const [categorySingle, setCategorySingle] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("");
    const [searchValue, setSearchValue] = useState<string>("");

    const updateUrl = (params: { [key: string]: string }) => {
        const searchParams = new URLSearchParams(window.location.search);


        Object.keys(params).forEach(key => {
            if (params[key]) {
                searchParams.set(key, params[key]);
            } else {
                searchParams.delete(key);
            }
        });

        navigate(`?${searchParams.toString()}`, { replace: true });
    };

    // Set platform
    const handleSetPlatform = (value: string) => {
        setPlatform(value);
        updateUrl({ platform: value });
    };
    

    // Set category
    const handleSetCategory = (value: string | string[]) => {
        if (Array.isArray(value)) {

            setCategory(value);
            updateUrl({ category: value.join(",") });
        } else {
            // Handle adding a single category
            setCategory((prevCategory) => {
                const updatedCategory = prevCategory.includes(value)
                    ? prevCategory //
                    : [...prevCategory, value];
                updateUrl({ category: updatedCategory.join(",") });
                return updatedCategory;
            });
            setCategorySingle(value);
        }
    };

    // Set sorting preference
    const handleSetSortBy = (value: string) => {
        setSortBy(value);
        updateUrl({ sortBy: value });
    };

    const handleSearchValue = (value: string) => {
        setSearchValue(value);
        updateUrl({ search: value });
    }

    // Fetch category list
    const queryCategoryList = useQuery({
        queryFn: getAllCategories,
        queryKey: ["category-list"],
    });

    const queryGameList = useQuery(
        ['games-list', platform, categorySingle, sortBy],
        () => getAllGames(platform, categorySingle, sortBy),
    );

    const queryFilterGame = useQuery(
        ['filter-games-list', platform, category, sortBy],
        () => getAllFilterGames(platform, category, sortBy),
        {
            enabled: category.length > 1
        }
    );


    let gameList = category.length > 1 ? queryFilterGame.data : queryGameList.data;

    gameList = gameList?.filter(game =>
        game.title.toLowerCase().includes(searchValue.toLowerCase()) 
      );

      console.log(gameList)


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        // Check for existing query parameters in the URL
        const platformParam = searchParams.get('platform');
        const categoryParam = searchParams.get('category');
        const sortByParam = searchParams.get('sortBy');
        const searchParam = searchParams.get('search');

        if (platformParam) {
            handleSetPlatform(platformParam);
        }
        if (categoryParam) {
            const convertedArray = categoryParam.split(",");

            setCategory(convertedArray);
            setCategorySingle(convertedArray[0])
        }

        if (sortByParam) {
            handleSetSortBy(sortByParam);
        }

        if(searchParam){
            handleSearchValue(searchParam);
        }

    }, [location.search]);

    // Context value to be passed to children components
    const value = {
        queryCategoryList,
        queryFilterGame,
        queryGameList,
        category,
        sortBy,
        platform,
        categorySingle,
        gameList,
        searchValue,
        handleSearchValue,
        handleSetPlatform,
        handleSetCategory,
        handleSetSortBy
    } as any;

    return (
        <HomePageContext.Provider value={value}>
            {children}
        </HomePageContext.Provider>
    );
}

export const useHomePageContext = () => {
    return useContext(HomePageContext);
};
