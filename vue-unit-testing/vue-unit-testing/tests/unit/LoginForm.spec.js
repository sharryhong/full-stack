import LoginForm from '@/components/LoginForm';
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  //  test 메소드 = it 메소드 
  it('emits an events with a user data payload', () => {
    const wrapper = mount(LoginForm)
    
    // 실제 사용자가 사용하는 방식으로 테스트를 작성
    // 1. input text 찾기
    // const input = wrapper.find('input[type="test"]')
    // ㄴ 입력이 여러 개인 경우 적절하지 않은 코드 
    const input = wrapper.find('[data-testid="name-input"]')
    // ㄴ class, id가 변경되는 이슈가 생겨도 안심 

    // 2. input text value 설정
    input.setValue('Sharry')

    // 3. submit 시뮬레이션
    wrapper.trigger('submit')
    // ㄴ 버튼 click trigger로 테스트하면 키보드 enter 사용시는 테스트가 안될 수 있다. 

    // 4. emit 이벤트 확인 
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    // ㄴ 배열값
    expect(formSubmittedCalls).toHaveLength(1)

    // 5. payload가 올바른지 확인
    const expectedPayload = { name: 'Sharry' }
    console.log(wrapper.emitted('formSubmitted'))
    // ㄴ [ [ { name: 'Sharry' } ] ]
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
  })
});