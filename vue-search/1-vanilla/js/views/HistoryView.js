import KeywordView from './KeywordView.js'

const tag = '[HistoryView]'

const HistoryView = Object.create(KeywordView)

// KeywordView의 getKeywordsHtml 함수를 오버라이딩
HistoryView.getKeywordsHtml = function(data) {
    return data.reduce((html, item) => {
        html += `<li data-keyword="${item.keyword}">
            ${item.keyword}
            <span class="date">${item.date}</span>
            <button class="btn-remove"></button>
        </li>`
        return html
    }, '<ul class="list">') + '</ul>'
}

HistoryView.bindRemoveBtn = function() {
    Array.from(this.el.querySelectorAll('.btn-remove')).forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation()
            this.onRemove(btn.parentElement.dataset.keyword)
        })
    })
}

HistoryView.onRemove = function(keyword) {
    this.emit('@remove', {keyword})
}

export default HistoryView
