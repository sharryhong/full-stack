const tag = '[View]'

export default {
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  on(event, handler) { // 특정 이벤트 발생시 핸들러 실행
    this.el.addEventListener(event, handler)
    return this
  },

  emit(event, data) { // 스스로 이벤트 방출 
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
}
