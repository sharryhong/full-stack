import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import firebaseApp from "./service/firebase.js";
import AuthService from "./service/auth_service.js";
import ImageUploader from "./service/image_uploader.js";

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} imageUploader={imageUploader} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
