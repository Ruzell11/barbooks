import React from 'react';
import './index.css';
import { useHomePageContext } from '../store';
import LoadingSpinner from '../../shared/spinner';
import { Game } from '../../../interface/gameInterface';
import { Link } from 'react-router-dom';

export default function HomePageGameList() {
    const { queryFilterGame, queryGameList, category, gameList } = useHomePageContext() as any;


    if (queryGameList.isLoading || (queryFilterGame.isLoading && category.length > 1)) {
        return <LoadingSpinner />;
    }

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
                                <Link to={`/game/${game.id}`} className="game-list__card-view-more">
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
                                </Link>
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
