import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

// describe : 관련 테스트를 그룹화. 테스트가 하나뿐이면 describe 블록으로 래핑 할 필요가 없다.
describe('AppHeader', () => {
  // https://jestjs.io/docs/en/api#testname-fn-timeout
  // test(테스트를 정의하는 문자열, 실제 테스트 논리가 이동할 함수)
  // it()으로 사용가능 
  test('If user is not logged in, do not show logout button', () => {
    // test body : 논리 
    const wrapper = mount(AppHeader) // 컴포넌트 마운트 
    // expect() : 테스트가 반환할 것으로 예상하는 내용이 실제로 반환 된 내용과 일치하는지 여부를 결정
    // expect(theResult).toBe(true)
    // https://jestjs.io/docs/en/expect
    // expect(true).toBe(true) // $ yarn test:unit 로 일단 테스트용  
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('If user is logged in, show logout button', async () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true }) // 현재 값은 false이므로 여기에서는 true로 바꿔준다. 

    // true로 바뀐 뒤에 실행되어야하므로, async await 문법 필요 
    await wrapper.vm.$nextTick() 
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
});