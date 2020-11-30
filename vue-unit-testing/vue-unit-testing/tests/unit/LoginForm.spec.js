import LoginForm from '@/components/LoginForm';
import { mount } from '@/vue/test-utils';

describe('LoginForm', () => {
  it('emits an events with a user data payload', () => {
    const wrapper = mount(LoginForm)
    
    // 1. input text 찾기
    // 2. input text value 설정
    // 3. submit 시뮬레이션
    // 4. emit 이벤트 확인 
    // 5. payload가 올바른지 확인
  })
});