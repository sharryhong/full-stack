import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import reducers from '../reducers'

const configureStore = () => {
  const store = createStore(reducers);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;