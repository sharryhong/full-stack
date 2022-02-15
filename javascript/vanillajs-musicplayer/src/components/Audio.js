import Component from "../core/Component.js";

class Audio extends Component {
  template() {
    const { songs, songIndex } = this.$props;
    return `<audio src="../src/assets/music/${songs[songIndex]}.mp3" id="audio"></audio>`;
  }
  mounted() {
    const { isPlaying } = this.$props;
    if (isPlaying) {
      this.playSong();
    }
  }
  playSong() {
    this.$target.querySelector("#audio").play();
  }
}

export default Audio;
