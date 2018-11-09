import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.messages = {
    NO_RESULT: '검색 결과가 없습니다'
}

ResultView.setup = function(el) {
    this.init(el)
}

// 데이터를 받아서, 동적으로 돔을 그려주는 함수
// data는 컬렉션으로 받는다. 없을 땐 빈배열
ResultView.render = function(data = []) {
    console.log(tag, 'render()', data);
    this.el.innerHTML = data.length ? this.getSearchResultHtml(data) : this.messages.NO_RESULT
}

ResultView.getSearchResultHtml = function(data) {
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>'
},

ResultView.getSearchItemHtml = function(item) { // li 리스트 만드는 함수 
    return `<li>
        <img src="${item.image}">
        <p>${item.name}</p>
    </li>`
}

export default ResultView
