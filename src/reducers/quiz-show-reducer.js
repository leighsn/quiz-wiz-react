export default function(state = null, action){
  switch (action.type) {
    case 'FETCH_QUIZ':
      return action.payload.data
    default:
      return state
  }
}
