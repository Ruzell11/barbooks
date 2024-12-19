"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
class GameController {
    constructor(apiUrl = config_1.default.API_URL || "", httpClient = axios_1.default) {
        if (!apiUrl) {
            throw new Error("API URL is required.");
        }
        this.apiUrl = apiUrl;
        this.httpClient = httpClient;
    }
    getAllGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { platform, category, "sort-by": sortBy } = req.query;
                // Build query parameters dynamically
                const params = {};
                if (platform)
                    params.platform = platform;
                if (category)
                    params.category = category;
                if (sortBy)
                    params["sort-by"] = sortBy;
                const response = yield this.httpClient.get(`${this.apiUrl}/games`, { params });
                res.status(config_1.default.HTTP_STATUS_CODE.SUCCESS).json(response.data);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(config_1.default.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: error.message });
                }
                else {
                    res.status(config_1.default.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: "An unexpected error occurred" });
                }
            }
        });
    }
    filterGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tag, platform, sort } = req.query;
                // Build query parameters dynamically
                const params = {};
                if (tag)
                    params.tag = tag;
                if (platform)
                    params.platform = platform;
                if (sort)
                    params.sort = sort;
                const response = yield this.httpClient.get(`${this.apiUrl}/filter`, { params });
                res.status(config_1.default.HTTP_STATUS_CODE.SUCCESS).json(response.data);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(config_1.default.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: error.message });
                }
                else {
                    res.status(config_1.default.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: "An unexpected error occurred" });
                }
            }
        });
    }
    getCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.httpClient.get(`${this.apiUrl}/categories`);
                res.status(config_1.default.HTTP_STATUS_CODE.SUCCESS).json(response.data);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(config_1.default.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: error.message });
                }
                else {
                    res.status(config_1.default.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: "An unexpected error occurred" });
                }
            }
        });
    }
    getGameDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    res.status(config_1.default.HTTP_STATUS_CODE.NOT_FOUND).json({ error: "Game ID is required" });
                    return;
                }
                const response = yield this.httpClient.get(`${this.apiUrl}/game`, {
                    params: { id },
                });
                res.status(config_1.default.HTTP_STATUS_CODE.SUCCESS).json(response.data);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(config_1.default.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: error.message });
                }
                else {
                    res.status(config_1.default.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: "An unexpected error occurred" });
                }
            }
        });
    }
}
exports.GameController = GameController;
