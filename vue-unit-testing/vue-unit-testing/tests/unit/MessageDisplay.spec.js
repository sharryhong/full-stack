import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils';

describe('MessageDisplay', () => {
  it('Calls getMessage and display message', async () => {
    // API call 가정
    const wrapper = mount(MessageDisplay)
  })

  it('Displays an error when getMessage call fails', async () => {
    // API call 가정
    const wrapper = mount(MessageDisplay)
  })
})