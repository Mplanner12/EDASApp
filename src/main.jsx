import React from "react";
// import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Appwrite from "appwrite";

const appwrite = new Appwrite();

// Set CORS headers for all Appwrite API requests
appwrite.setHeaders({
  "Access-Control-Allow-Origin":
    "https://edas-p3fcy9xhd-mplanner12s-projects.vercel.app",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
});

<React.StrictMode>
  <App />
</React.StrictMode>;
// );
