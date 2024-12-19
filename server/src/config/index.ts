import dotenv from "dotenv";

dotenv.config();


const ensureApiUrlIsDefined = (apiUrl: string | undefined): string => {
    if (!apiUrl) {
      throw new Error('API_URL is not defined in the environment variables');
    }
    return apiUrl;
  };

const config = {
    API_URL:  process.env.ENVIRONMENT === "dev" ? process.env.API_URL_DEV : process.env.API_URL_PROD,

    HTTP_STATUS_CODE: {
      SUCCESS: 200,
      NOT_FOUND: 404,
      MANY_REQUEST: 429,
      SERVER_ERROR: 500
    },
  };
  
  export default config;
  