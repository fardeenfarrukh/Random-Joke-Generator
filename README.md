# Random Joke Generator

A simple web application that fetches random jokes from the **Official Joke API** and displays them in a fun way. The app allows users to see the joke setup and reveal the punchline upon request.

## Features

- **Generate Joke:** Displays the setup of a random joke.
- **Reveal Punchline:** Displays the punchline of the joke after clicking the "Reveal Punchline" button.
- **Axios Integration:** Uses `axios` to make API requests to fetch jokes.
- **Express Backend:** Simple Express.js server to handle API calls.
- **React Frontend:** Built with React to dynamically update the joke display.

## Demo

You can try the app by clicking on the **Generate a Joke** button and revealing the punchline.

## Technologies Used

### Frontend:
- **React:** For the interactive user interface.
- **Axios:** For making API requests.
- **CSS:** Simple styling for the UI.

### Backend:
- **Node.js / Express:** Backend server to make API calls to the Official Joke API.

### API:
- **Official Joke API**: `https://official-joke-api.appspot.com/random_joke`

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your system.
- Git installed on your system.

### Local Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/fardeenfarrukh/Random-Joke-Generator.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd random-jokes-generator
   ```

3. **Install dependencies** for both backend and frontend:

   ```bash
   # Navigate to backend directory and install dependencies
   cd backend
   npm install

   # Navigate to frontend directory and install dependencies
   cd ../frontend
   npm install
   ```

4. **Start the backend server**:

   ```bash
   cd ../backend
   node server.js
   ```

5. **Start the frontend app**:

   Open a new terminal, navigate to the `frontend` directory, and run:

   ```bash
   cd ../frontend
   npm start
   ```

6. **Visit the app**:

   Open your browser and go to `http://localhost:3000` to use the Random Joke Generator.

## API Endpoints

### Backend
- `/api/random-joke`: Fetches a random joke from the Official Joke API.

## Project Structure

```
random-jokes-generator/
│
├── backend/
│   ├── database.js
│   ├── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── JokeGenerator.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
