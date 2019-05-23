import reducer from './reducer';
import * as actions from './actions';

describe('reducer', () => {
  describe('CAR_START', () => {
    it('sets isRunning to true', function () {
      const previousState = {
        otherProp: 'test-123'
      };
      const action = actions.handleCarStart();
      const nextState = reducer(previousState, action);
      expect(nextState).toEqual({
        isRunning: true,
        otherProp: 'test-123'
      });
    });
  });
});
