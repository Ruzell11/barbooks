import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getGameDetails } from "../service";
import LoadingSpinner from "../../shared/spinner";
import "./index.css";


export default function GameSection() {
    // Get the id from the URL parameters
    const { id } = useParams();
    const navigate = useNavigate();


    const goBack = () => {
        navigate(-1);
    }

    const queryGameDetails = useQuery(
        ['games-details', id],
        () => getGameDetails(id),
        {
            enabled: !!id,
        }
    );

    if (queryGameDetails.isLoading) {
        return <LoadingSpinner />;
    }

    if (queryGameDetails.error) {
        return <div>Error fetching game details</div>;
    }

    const gameDetails = queryGameDetails.data;

    return (
        <>
            <section className="game-details__container">
                <div className="game-details__wrapper">
                    <div className="game-details__thumbnail-container">
                        <img
                            src={"https://via.placeholder.com/100"}
                            className="game-details__thumbnail"
                            alt={`${gameDetails?.title} Thumbnail`}
                        />
                    </div>
                    <div className="game-details__content">
                        <h1>{gameDetails?.title}</h1>
                        <p>{gameDetails?.description}</p>
                        <p><strong>Genre:</strong> {gameDetails?.genre}</p>
                        <p><strong>Platform:</strong> {gameDetails?.platform}</p>
                        <p><strong>Publisher:</strong> {gameDetails?.publisher}</p>
                        <p><strong>Developer:</strong> {gameDetails?.developer}</p>
                        <p><strong>Release Date:</strong> {new Date(gameDetails?.releaseDate).toLocaleDateString()}</p>

                        <a onClick={goBack} className="game-details__href">Back</a>
                    </div>
                </div>

            </section>
            <div className="game-details__screenshots">
                {gameDetails?.screenshots?.map((screenshot: any) => (
                    <img
                        key={screenshot.id}
                        src={"https://via.placeholder.com/100"}
                        alt={`Screenshot ${screenshot.id}`}
                        className="game-details__screenshot"
                    />
                ))}
            </div>
        </>
    );
}
