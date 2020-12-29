import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils';
import { getMessage } from '@/services/axios';
import flushPromises from "flush-promises";

jest.mock('@/services/axios')
beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('Calls getMessage and display message', async () => {
    // API call 모의(Mock)
    const mockMessage = "Hello from the db!"
    getMessage.mockResolvedValueOnce({ text: mockMessage }) // 성공
    const wrapper = mount(MessageDisplay)
    // wait for promise to resolve
    await flushPromises();
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1);
    // check that component display message
    const message = wrapper.find('[data-testId="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })

  it('Displays an error when getMessage call fails', async () => {
    const mockError = "Oops! Something went wrong.";
    getMessage.mockRejectedValueOnce(mockError); // 실패 
    const wrapper = mount(MessageDisplay)

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);
    const displayedError = wrapper.find('[data-testid="message-error"]').element.textContent;
    expect(displayedError).toEqual(mockError);
  })
})

