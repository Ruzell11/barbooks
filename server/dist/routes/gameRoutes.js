"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GameController_1 = require("../controllers/GameController");
const config_1 = __importDefault(require("../config"));
const axios_1 = __importDefault(require("axios"));
const gameRouter = express_1.default.Router();
const gameController = new GameController_1.GameController(config_1.default.API_URL, axios_1.default);
// Define routes
gameRouter.get("/", (req, res) => gameController.getAllGames(req, res));
gameRouter.get("/filter", (req, res) => gameController.filterGames(req, res));
gameRouter.get("/categories", (req, res) => gameController.getCategories(req, res));
gameRouter.get("/:id", (req, res) => gameController.getGameDetails(req, res));
exports.default = gameRouter;
