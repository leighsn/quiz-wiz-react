import { sortCohorts } from '../utils/utils';
import { formatCohortDates } from '../utils/utils';

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
