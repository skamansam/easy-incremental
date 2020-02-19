// GameBoard
import { GameBoard } from './index'

// Utilities
import { shallow, createLocalVue } from '@vue/test-utils'

// Bootstrap
const localVue = createLocalVue()

describe('GameBoard', () => {
  function mountFunction (options = {}) {
    return shallow(GameBoard, {
      localVue,
      ...options,
    })
  }

  it('should work', () => {
    const wrapper = mountFunction()
  })
})
