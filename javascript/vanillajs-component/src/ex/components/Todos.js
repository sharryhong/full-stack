import Component from "../core/Component.js";

class Todos extends Component {
  get filteredItems() {
    const { filterName, items } = this.$state;
    return items.filter(
      ({ active }) =>
        (filterName === "active" && active) ||
        (filterName === "inactive" && !active) ||
        filterName === "all"
    );
  }

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
      <form class="add-form">
        <input type="text" class="todo-input" placeholder="input todos" />
        <button class="add-btn">입력</button>
      </form>
      <ul>
       ${this.filteredItems
         .map(
           (item) => `
            <li data-id="${item.id}">
              ${item.contents}
              <button class="toggle-btn" style="color: ${
                item.active ? "#09f" : "#f09"
              }">
                ${item.active ? "활성" : "비활성"}
              </button>
              <button class="delete-btn">삭제</button>
            </li>`
         )
         .join("")}
      </ul>
      <div>
        <button class="filter-btn" data-filter="all">전체 보기</button>
        <button class="filter-btn" data-filter="active">활성 보기</button>
        <button class="filter-btn" data-filter="inactive">비활성 보기</button>
      </div>
    `;
  }
  setEvent() {
    this.addEvent("keyup", ".todo-input", (event) => {
      if (event.key !== "Enter") return;
      const { items } = this.$state;
      const id = Date.now();
      const contents = event.target.value;
      contents &&
        this.setState({
          items: [...items, { id, contents, active: false }],
        });
    });

    this.addEvent("click", ".add-btn", (event) => {
      event.preventDefault();
      const { items } = this.$state;
      const id = Date.now();
      const contents = this.$target.querySelector(".todo-input").value;
      contents &&
        this.setState({
          items: [...items, { id, contents, active: false }],
        });
    });

    this.addEvent("click", ".filter-btn", (event) => {
      this.setState({ filterName: event.target.dataset.filter });
    });

    this.addEvent("click", ".toggle-btn", (event) => {
      const { items } = this.$state;
      const id = Number(event.target.closest("[data-id]").dataset.id);
      const index = items.findIndex((item) => item.id === id);
      items[index].active = !items[index].active;
      this.setState({ items });
    });

    this.addEvent("click", ".delete-btn", (event) => {
      const { items } = this.$state;
      const id = Number(event.target.closest("[data-id]").dataset.id);
      items.splice(
        items.findIndex((item) => item.id === id),
        1
      );
      this.setState({ items });
    });
  }
}

export default Todos;
