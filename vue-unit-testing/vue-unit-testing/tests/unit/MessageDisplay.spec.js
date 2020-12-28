import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils';
import { getMessage } from '@/services/axios';
import flushPromises from "flush-promises";

jest.mock('@/services/axios')

describe('MessageDisplay', () => {
  it('Calls getMessage and display message', async () => {
    // API call 모의(Mock)
    const mockMessage = "Hello from the db!"
    getMessage.mockResolvedValueOnce({ "text": mockMessage })
    const wrapper = mount(MessageDisplay)
    // wait for promise to resolve
    await flushPromises();

    // check that call happened once

    // check that component display message
  })

  it('Displays an error when getMessage call fails', async () => {
    // API call 모의(Mock)
    const wrapper = mount(MessageDisplay)
  })
})