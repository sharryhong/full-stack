import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('By default, randomNumber data value should be 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })
  test('If button is clicked, randomNumber should be between 1 and 10', async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('button').trigger('click') // 버튼 클릭 
    // 버튼 클릭 후 일어나야하므로 async await 문법 사용 
    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })
  test('If button is clicked, randomNumber should be between 200 and 300', async () => {
    const wrapper = mount(RandomNumber, {
      propsData: {
        min: 200,
        max: 300
      }
    })
    wrapper.find('button').trigger('click') // 버튼 클릭 
    // 버튼 클릭 후 일어나야하므로 async await 문법 사용 
    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
});