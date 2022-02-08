const $app = document.querySelector("#app");

let state = {
  items: ["item1", "item2", "item3", "item4", "item5"],
};

const setState = (newState) => {
  state = { ...state, ...newState };
  render();
};

const render = () => {
  const { items } = state;

  $app.innerHTML = `
    <button id="append">Add</button>
    <ul>
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  document.querySelector("#append").addEventListener("click", () => {
    setState({ items: [...items, `item${items.length + 1}`] });
  });
};

render();
