import Component from "../core/Component.js";

class ItemFilter extends Component {
  template() {
    return `
      <div>
        <button class="filter-btn" data-filter="all">전체 보기</button>
        <button class="filter-btn" data-filter="active">활성 보기</button>
        <button class="filter-btn" data-filter="inactive">비활성 보기</button>
      </div>
    `;
  }
  setEvent() {
    const { filterItem } = this.$props;
    this.addEvent("click", ".filter-btn", (event) => {
      filterItem(event.target.dataset.filter);
    });
  }
}

export default ItemFilter;
