"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ensureApiUrlIsDefined = (apiUrl) => {
    if (!apiUrl) {
        throw new Error('API_URL is not defined in the environment variables');
    }
    return apiUrl;
};
const config = {
    API_URL: process.env.ENVIRONMENT === "dev" ? process.env.API_URL_DEV : process.env.API_URL_PROD,
    HTTP_STATUS_CODE: {
        SUCCESS: 200,
        NOT_FOUND: 404,
        MANY_REQUEST: 429,
        SERVER_ERROR: 500
    },
};
exports.default = config;
