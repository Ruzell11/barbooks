import express from "express";
import { GameController } from "../controllers/GameController";
import config from "../config";
import axios from "axios";

const gameRouter = express.Router();
const gameController = new GameController(config.API_URL, axios);

// Define routes
gameRouter.get("/", (req, res) => gameController.getAllGames(req, res));
gameRouter.get("/filter", (req, res) => gameController.filterGames(req, res));
gameRouter.get("/categories", (req, res) => gameController.getCategories(req, res));
gameRouter.get("/:id", (req, res) => gameController.getGameDetails(req, res));

export default gameRouter;
