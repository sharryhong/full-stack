import MessageContainer from "@/components/MessageContainer";
import { mount } from "@vue/test-utils";

describe("MessageContainer", () => {
  it("Wraps the MessageDisplay component", () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: {
          template: '<p data-testid="message">Hello from the db!</p>',
        },
      },
    });
    
    const message = wrapper.find('[data-testId="message"]').element.textContent;
    expect(message).toEqual("Hello from the db!");
  });
});
