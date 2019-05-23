import * as actions from './actions';

describe('actions', () => {
  describe('handleCarStart', () => {
    it('returns type CAR_START with payload', function () {
      const action = actions.handleCarStart();
      expect(action).toMatchSnapshot();
      
    });
  });
});
