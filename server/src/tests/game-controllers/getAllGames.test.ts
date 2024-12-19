

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Request, Response } from 'express';
import { GameController } from '../../controllers/GameController';
import config from '../../config';

describe('GameController - getAllGames', () => {
  let gameController: GameController;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    gameController = new GameController(config.API_URL, axios);
  });

  afterEach(() => {
    mockAxios.reset(); 
  });

  it('should fetch all games successfully', async () => {
    // Mock response data
    const mockGames = [ {
        "id": 582,
        "title": "Tarisland",
        "thumbnail": "/g/582/thumbnail.jpg",
        "shortDescription": "A cross-platform MMORPG developed by Level Infinite and Published by Tencent.",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Tencent",
        "developer": "Level Infinite",
        "releaseDate": "2024-06-22"
    }, 
    {
        "id": 540,
        "title": "Overwatch 2",
        "thumbnail": "/g/540/thumbnail.jpg",
        "shortDescription": "A hero-focused first-person team shooter from Blizzard Entertainment.",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Activision Blizzard",
        "developer": "Blizzard Entertainment",
        "releaseDate": "2022-10-04"
    },
];
    mockAxios.onGet(`${config.API_URL}/games`).reply(200, mockGames);

    const req = {
        query: {} 
      } as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

    
    await gameController.getAllGames(req, res);

    expect(res.status).toHaveBeenCalledWith(config.HTTP_STATUS_CODE.SUCCESS);
    expect(res.json).toHaveBeenCalledWith(mockGames);
  });

 
});
