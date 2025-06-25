Here’s a detailed **README.md** for your project:

---

# Movie CRUD

A full-stack application that enables users to manage blogs and search for news. Built using **React**, **Node.js**, **Express**, and **MongoDB**.

## Features



  * Create, Read, Update, and Delete (CRUD) operations for blogs.
  * Search blogs by title using case-insensitive queries.




## Tech Stack

* **Frontend**: React, React Router, Bootstrap
* **Backend**: Node.js, Express, MongoDB (with Mongoose)
* **Styling**: Bootstrap

## Installation and Setup

### Prerequisites

* Node.js and npm installed.
* MongoDB instance running locally or remotely.


### Steps to Run Locally

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/palakash26/Movie_CRUD.git
   
   ```

2. **Set Environment Variables**:
   Create a `.env` file in the root directory with the following:

   ```env
   PORT=5001
   MONGO_URI=mongodb://localhost:27017/blogDB
   REACT_APP_NEWS_API_KEY=your-news-api-key
   SESSION_SECRET=your-session-secret
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   cd client
   npm install
   ```

4. **Start the Backend Server**:

   ```bash
   npm run dev
   ```

5. **Start the Frontend**:

   ```bash
   cd client
   npm start
   ```

6. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Authentication

* `POST /login`: Login with username and password.
* `POST /logout`: Logout from the current session.

### Blogs

* post /add
* get /
* put /upa/:id
* get /movie/:id
* delete /del/:id




## Folder Structure

```
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.js
│   │   │   ├── Home.js
│   │   │   ├── Show.js
│   │   │   ├── AddMovie.js
│   │   │   ├── UpdatedMovie.js
│   │   │   ├── SearchResults.js
├── server.js
├── models
│   ├── DbSchema.js
├── routes
│   ├── Routes.js
```

## Scripts

* `npm start`: Run the server.
* `npm run dev`: Run the server in development mode with nodemon.

## Dependencies

### Backend

* `express`: Web framework for Node.js.
* `mongoose`: MongoDB ODM for schema management.
* `dotenv`: Manage environment variables.
* `express-session`: Session management.
* `connect-mongo`: Store session data in MongoDB.

### Frontend

* `react`: Frontend library for UI.
* `react-router-dom`: Routing for React.
* `bootstrap`: CSS framework for styling.

## License

This project is licensed under the MIT License.

---

Feel free to customize the repository link and any other specific details!
