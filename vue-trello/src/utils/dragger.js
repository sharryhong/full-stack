import dragula from 'dragula'
import 'dragula/dist/dragula.css'

const dragger = {
  init(container) {
    return dragula([...container])
  },
  sibling({el, wrapper, candidates, type}) { // target의 전, 다음 객체 반환
    const curId = el.dataset[type + 'Id'] * 1
    let prev = null
    let next = null

    candidates.forEach((el, idx, arr) => {
        const id = el.dataset[type + 'Id'] * 1
        if(id == curId) {
          prev = idx > 0 ? { // 맨 앞이 아닌경우 prev 셋팅
            id: arr[idx -1].dataset[type + 'Id'] * 1,
            pos: arr[idx -1].dataset[type + 'Pos'] * 1
          } : null // 맨 앞인 경우 prev는 없음
          next = idx < arr.length - 1 ? { // 마지막이 아닌경우 next 셋팅
            id: arr[idx +1].dataset[type + 'Id'] * 1,
            pos: arr[idx + 1].dataset[type + 'Pos'] * 1
          } : null // 맨 마지막인 경우 next는 없음
        }
      })
    return {prev, next}
  }
}

export default dragger
