import View from './View.js'

const tag = '[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.setup = function(el) {
    this.init(el)
    return this
}

KeywordView.render = function(data = []) {
    this.el.innerHTML = data.length ? this.getKeywordsHtml(data) : '추천 검색어가 없습니다'
    this.bindClick()
    this.show()
    return this
}

KeywordView.getKeywordsHtml = function(data) {
    return data.reduce((html, item, index) => {
        html += this.getKeywordItemHtml(item, index)
        return html
    }, '<ul class="list">') + '</ul>'
}

KeywordView.getKeywordItemHtml = function(item, index) {
    return `<li data-keyword="${item.keyword}">
            <span class="number">${index + 1}</span>
            ${item.keyword}
      </li>`
}

KeywordView.bindClick = function() {
    Array.from(this.el.querySelectorAll('li')).forEach( li => {
        li.addEventListener('click', e => this.onClickKeyword(e))
    })
}

KeywordView.onClickKeyword = function(e) {
    const {keyword} = e.currentTarget.dataset
    console.log(e.currentTarget.dataset); // {keyword: ""}
    this.emit('@click', {keyword})
}

export default KeywordView
