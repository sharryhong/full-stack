import App from "./App.js";
import AudioPresenter from "../audio_presenter.js";

const presenter = new AudioPresenter({
  songs: [
    "Falling Slowly",
    "Juice WRLD Ft Benny Blanco - Real Shit",
    "Lil Baby, Lil Durk ft Rodwave - Rich Off Pain",
  ],
  songIndex: 0,
  isPlaying: false,
});

new App(document.querySelector("#app"), { presenter });
