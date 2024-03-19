# ImageSearch

ImageSearch is a web application that allows users to search for images and add them to their favorites.

## Project Structure

The project is divided into two main parts:

- `client`: This is the front-end of the application, built with React, TypeScript, Vite and Google custom search. It also uses Tailwind CSS for styling and Auth0 for authentication.
- `server`: This is the back-end of the application, built with Express.js. Validation with Joi. It provides API endpoints for fetching favorite images and adding new images to favorites.

Your .env in client folder should look like this:

VITE_GOOGLE_API_KEY=your_key<br>
VITE_SEARCH_ENGINE_ID=your_key<br>
VITE_AUTH_DOMAIN=your_key<br>
VITE_AUTH_CLIENT_ID=your_key<br>



