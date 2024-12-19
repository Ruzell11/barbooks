import { Request, Response } from "express";
import axios from "axios"; 
import type { AxiosInstance } from "axios"; 
import config from "../config";


export class GameController {
  private apiUrl: string;
  private httpClient: AxiosInstance;

  constructor(apiUrl: string = config.API_URL || "", httpClient: AxiosInstance = axios) {
    if (!apiUrl) {
      throw new Error("API URL is required.");
    }
    this.apiUrl = apiUrl;
    this.httpClient = httpClient;
  }

  public async getAllGames(req: Request, res: Response): Promise<void> {
    try {
      const { platform, category, "sort-by": sortBy } = req.query || {};
      
      // Build query parameters dynamically
      const params: Record<string, string> = {};
      if (platform) params.platform = platform as string;
      if (category) params.category = category as string;
      if (sortBy) params["sort-by"] = sortBy as string;

      const response = await this.httpClient.get(`${this.apiUrl}/games`, { params });
      res.status(config.HTTP_STATUS_CODE.SUCCESS).json(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(config.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: error.message });
      } else {
        res.status(config.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: "An unexpected error occurred" });
      }
    }
  }

  public async filterGames(req: Request, res: Response): Promise<void> {
    try {
      const { tag, platform, sort } = req.query;

      // Build query parameters dynamically
      const params: Record<string, string> = {};
      if (tag) params.tag = tag as string;
      if (platform) params.platform = platform as string;
      if (sort) params.sort = sort as string;

      const response = await this.httpClient.get(`${this.apiUrl}/filter`, { params });
      res.status(config.HTTP_STATUS_CODE.SUCCESS).json(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(config.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: error.message });
      } else {
        res.status(config.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: "An unexpected error occurred" });
      }
    }
  }

  public async getCategories(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.httpClient.get(`${this.apiUrl}/categories`);
      res.status(config.HTTP_STATUS_CODE.SUCCESS).json(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(config.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: error.message });
      } else {
        res.status(config.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: "An unexpected error occurred" });
      }
    }
  }

  public async getGameDetails(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(config.HTTP_STATUS_CODE.NOT_FOUND).json({ error: "Game ID is required" });
        return;
      }

      const response = await this.httpClient.get(`${this.apiUrl}/game`, {
        params: { id },
      });
      res.status(config.HTTP_STATUS_CODE.SUCCESS).json(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(config.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: error.message });
      } else {
        res.status(config.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: "An unexpected error occurred" });
      }
    }
  }
}
