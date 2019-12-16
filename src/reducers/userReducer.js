const initialState = {
  name: '',
  level: '',
  workoutDays: [],
  myWorkouts: [],
  lastWorkouts: '',
  dailyProgress: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
      break;
    case 'SET_WORKOUTDAYS':
      return {...state, workoutDays: action.payload.workoutDays};
      break;
    case 'SET_WORKOUTDAYS':
      return {...state, level: action.payload.level};
      breack;
  }

  return state;
};
