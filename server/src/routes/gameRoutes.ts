import express from "express";
import { GameController } from "../controllers/GameController";
import config from "../config";
import axios from "axios";

const gameRouter = express.Router();

const gameController = new GameController(config.API_URL, axios);


gameRouter.get("/", (req, res) => gameController.getAllGames(req, res));

export default gameRouter;
