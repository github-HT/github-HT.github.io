const HomeState = {
  link: 'link',
  activityList: []
};

export default function HomeReducer(state = HomeState, action) {
  switch(action.type) {
    case "SET_ACTIVITY_LIST": 
      return Object.assign({}, state, {
        activityList: action.activityList
      })
      break;
  }
  return state;
}
