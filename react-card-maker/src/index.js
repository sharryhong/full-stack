import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthService from "./service/auth_service";
import ImageUploader from "service/image_uploader";
import ImageFileInput from "components/base/image_file_input/ImageFileInput";
import CardRepository from "service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App
        authService={authService}
        FileInput={FileInput}
        cardRepository={cardRepository}
      />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
