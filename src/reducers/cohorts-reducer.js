export default function (state = null, action){
  switch (action.type) {
    case 'FETCH_COHORTS':
      return action.payload.data;
    case 'FILTER_COHORTS':
      return sortCohorts(state, action.payload, action.filterFlag);
    default:
      return state
  }
}

function direction (bool){
  return bool ? 1 : -1;
}

function sortCohorts(state, column, ascending){
  return Object.assign([], state.slice().sort((a, b)=>{
    if (a[column] < b[column]){
      return direction(ascending)
    } else if (a[column] > b[column]){
      return direction(!ascending)
    } else {
      return 0;
    }
  }))
}
