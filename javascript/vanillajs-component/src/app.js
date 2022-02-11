import Component from "./core/Component.js";
import ItemAppender from "./components/ItemAppender.js";

class App extends Component {
  setup() {
    this.$state = {
      filterName: "all",
      items: [
        {
          id: 1,
          contents: "todo1",
          active: true,
        },
        {
          id: 2,
          contents: "todo2",
          active: false,
        },
      ],
    };
  }
  template() {
    return `
      <h2>Todos</h2>
      <header data-component="item-appender"></header>
      <main data-component="items"></main>
      <footer data-component="item-filter"></footer>
    `;
  }
  mounted() {
    const { addItem } = this;
    const $itemAppender = this.$target.querySelector(
      '[data-component="item-appender"]'
    );

    new ItemAppender($itemAppender, { addItem: addItem.bind(this) });
  }

  addItem(contents) {
    const { items } = this.$state;
    const id = Date.now();
    this.setState({
      items: [...items, { id, contents, active: false }],
    });
  }
}

export default App;
