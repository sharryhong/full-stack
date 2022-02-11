import Component from "./core/Component.js";
import ItemAppender from "./components/ItemAppender.js";
import Items from "./components/Items.js";
import ItemFilter from "./components/ItemFilter.js";

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
    const $itemAppender = this.$target.querySelector(
      '[data-component="item-appender"]'
    );
    const $items = this.$target.querySelector('[data-component="items"]');
    const $itemFilter = this.$target.querySelector(
      '[data-component="item-filter"]'
    );

    new ItemAppender($itemAppender, { addItem: this.addItem.bind(this) });
    new Items($items, {
      filteredItems: this.filteredItems,
      toggleItem: this.toggleItem.bind(this),
      deleteItem: this.deleteItem.bind(this),
    });
    new ItemFilter($itemFilter, { filterItem: this.filterItem.bind(this) });
  }

  get filteredItems() {
    const { filterName, items } = this.$state;
    return items.filter(
      ({ active }) =>
        (filterName === "active" && active) ||
        (filterName === "inactive" && !active) ||
        filterName === "all"
    );
  }

  addItem(contents) {
    const { items } = this.$state;
    const id = Date.now();
    this.setState({
      items: [...items, { id, contents, active: false }],
    });
  }

  toggleItem(id) {
    const { items } = this.$state;
    const index = items.findIndex((item) => item.id === id);
    items[index].active = !items[index].active;
    this.setState({ items });
  }

  deleteItem(id) {
    const { items } = this.$state;
    items.splice(
      items.findIndex((item) => item.id === id),
      1
    );
    this.setState({ items });
  }

  filterItem(filter) {
    this.setState({ filterName: filter });
  }
}

export default App;
