class Component {
  $target;
  $state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
    this.setEvent();
  }
  setup() {}
  template() {}
  setEvent() {}
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  render() {
    this.$target.innerHTML = this.template();
  }
}

export default Component;
