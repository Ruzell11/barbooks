import React from 'react';
import './index.css';
import { useHomePageContext } from '../store';
import LoadingSpinner from '../../spinner';
import { Game } from '../../../interface/gameInterface';
import { useQuery } from '@tanstack/react-query';
import { getAllFilterGames, getAllGames } from '../services';

export default function HomePageGameList() {
    const { platform, category, sortBy, categorySingle } = useHomePageContext() as any;

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
      


    if (queryGameList.isLoading || (queryFilterGame.isLoading && category.length > 1)) {
        return <LoadingSpinner />;
    }

    const gameList = category.length > 1 ? queryFilterGame.data : queryGameList.data;

    return (
        <div className="game-list">
            {gameList?.length > 0 ? (
                gameList.map((game: Game) => (
                    <div key={game.id} className="game-list__card">
                        <h2 className="game-list__card-name">{game.title}</h2>
                        <div className="game-list__wrapper">
                            <img
                                src={"https://via.placeholder.com/100"}
                                alt={`${game.title} Thumbnail`}
                                className="game-list__card-thumbnail"
                            />
                            <div className="game-list__card-details">
                                <p className="game-list__card-description">{game.shortDescription}</p>
                                <a className="game-list__card-view-more">
                                    View More  
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="game-list__view-more-icon"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        height="16"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="game-list__no-games">
                    <p>No games available as of the moment.</p>
                </div>
            )}
        </div>
    );
    
}
