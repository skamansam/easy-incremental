// TopBar
import { shallow, createLocalVue } from '@vue/test-utils';
import { AppTopBar } from '../../../src/components/AppTopBar/index';

// Utilities

// Bootstrap
const localVue = createLocalVue();

describe('TopBar', () => {
  function mountFunction(options = {}) {
    return shallow(AppTopBar, {
      localVue,
      ...options,
    });
  }

  it('should work', () => {
    const wrapper = mountFunction();
  });
});
