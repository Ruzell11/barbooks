# SERVER

This project is a basic Express.js application written in TypeScript. It is designed with a modular structure and implements dependency injection to make the code scalable, testable, and maintainable.

## Libraries Used

- **Express.js**: A fast, unopinionated web framework for Node.js.
- **TypeScript**: A superset of JavaScript that adds static typing, enabling better tooling, error-checking, and maintainability.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity, used for testing the application.
- **Nodemon**: A tool that helps develop Node.js applications by automatically restarting the server when file changes are detected.
- **Axios**: A promise-based HTTP client for making requests to external APIs.

## Project Structure

![image](https://github.com/user-attachments/assets/1eb9d7d8-b671-4695-b956-eb092b8f0aee)



### Key Concepts

- **Modular Design**: The project is designed with a modular structure to improve scalability and maintainability. Each part of the application, including controllers, routes, and configuration, is placed in separate folders.
- **Dependency Injection**: The project uses a dependency injection approach to allow easy testing and reduce direct coupling between components. This also ensures that components can be swapped or replaced easily in future iterations.

## How to Run the Application

To run this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone <url>
    cd barbooks
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. **Development mode**: Run the server in development mode with automatic restarts on file changes:
    ```bash
    npm run dev
    ```

4. **Production build**: Build and run the application:
    ```bash
    npm run build
    npm start
    ```

5. **Run tests**: Run tests with Jest:
    ```bash
    npm run test
    ```

6. **ENV FILE** 
```bash
ENVIRONMENT=dev
PORT=3000
API_URL_DEV=https://api.dev.cloud.barbooksaustralia.com/code-challenge/api
API_URL_PROD=
```

## What Could Be Improved in the Next Iteration

- **Expand Test Coverage**: Currently, not all parts of the application are tested. In the next iteration, I plan to add tests for all controllers, routes, and other critical components to ensure the robustness of the system.
- **Improve Error Handling**: Error handling can be made more granular and precise by customizing error messages based on different error types.
- **Add More Features**: In future iterations, additional features like authentication, user management, and rate limiting will be implemented.
- **Optimize Performance**: Performance optimizations can be done, especially for the rate limiter, caching mechanisms, and API calls to external services.

## Notes

- The application is designed to be modular, allowing for easy maintenance and future scaling.
- Dependency injection is used to decouple components and make the code more testable.
- The application is in the early stages of development. Future iterations will focus on enhancing test coverage and implementing more features.
- The application is currently tested using Jest, with test configurations found in `jest.config.js`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
