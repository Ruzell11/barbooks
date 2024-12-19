import { Request, Response } from 'express';
import axios, { AxiosInstance } from 'axios';
import config from '../config';

export class GameController {
  private apiUrl: string;
  private httpClient: AxiosInstance;

  constructor(
    apiUrl: string = config.API_URL || '', 
    httpClient: AxiosInstance = axios 
  ) {
    if (!apiUrl) {
      throw new Error('API URL is required.');
    }

    this.apiUrl = apiUrl;
    this.httpClient = httpClient;
  }

  public async getAllGames(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.httpClient.get(`${this.apiUrl}/games`);
      res.status(config.HTTP_STATUS_CODE.SUCCESS).json(response.data);
    } catch (error: unknown) {
     
      if (error instanceof Error) {
        res.status(config.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: error.message });
      } else {
       
        res.status(config.HTTP_STATUS_CODE.SERVER_ERROR).json({ error: 'An unexpected error occurred' });
      }
    }
  }
}
