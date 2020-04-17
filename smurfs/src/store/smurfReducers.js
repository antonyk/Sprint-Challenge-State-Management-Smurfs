import * as act from './actions'


const initialState = {
  smurfs: [],
  isFetching: false

}

export function smurfReducers(state = initialState, action) {

  switch (action.type) {

    case act.FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true
      }

    case act.FETCH_SMURFS_FINISH:
      return {
        ...state,
        isFetching: false
      }

      case act.FETCH_SMURFS_RECEIVED:
        return {
          ...state,
          smurfs: action.payload
        }
  
    default:
      return state;
  }
}