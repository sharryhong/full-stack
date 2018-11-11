import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View) // View 모듈 복사


FormView.setup = function(el) { // html 엘리먼트 주입받아 내부적으로 속성으로 갖게하는 메서드
    this.init(el)
    this.inputEl = el.querySelector('.tf-search')
    this.resetEl = el.querySelector('.btn-reset')
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function(show = true) { // show의 defult값은 true
    this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function() {
    this.on('submit', e => e.preventDefault()) // 꼭 하자!
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
    this.resetEl.addEventListener('click', e => this.onClickReset())
}

FormView.onKeyup = function(e) {
    const enter = 13
    this.showResetBtn(this.inputEl.value.length)
    if(!this.inputEl.value.length) this.emit('@reset')
    if(e.keyCode !== enter) return
    this.emit('@submit', {input: this.inputEl.value}) // e.detail에 input속성(커스텀)으로 값 지정하기
}

FormView.onClickReset = function() {
    this.emit('@reset') // 삭제는 컨트롤러에서 하도록 위임
    this.showResetBtn(false)
}

FormView.setValue = function(value='') {
    this.inputEl.value = value
    this.showResetBtn(this.inputEl.value.length)
}

export default FormView
