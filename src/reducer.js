export default function(state, action) {
  if (action.type === 'CAR_START') {
    return {
      ...state,
      isRunning: true
    };
  }
  return state;
};
