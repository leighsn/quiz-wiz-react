export default function(state=null, action=null){
  switch (action.type){
    case 'FETCH_COHORT':
     return action.payload.data
    default:
     return state
  }
}
