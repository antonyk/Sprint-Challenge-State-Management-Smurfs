import axios from 'axios'
import * as act from './actions'


export function getSmurfs() {

  return (dispatch) => {
    dispatch({ type: act.FETCH_SMURFS_START })
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({ type: act.FETCH_SMURFS_FINISH })
        dispatch({
          type: act.FETCH_SMURFS_RECEIVED,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({ type: act.FETCH_SMURFS_FINISH })
      });
  }
}

export function postSmurf(data) {
  console.log("post action data: ", data)

  return dispatch => {
    dispatch({ type: act.FETCH_SMURFS_START })
    axios.post('http://localhost:3333/smurfs', data)
      .then(res => {
        dispatch({ type: act.FETCH_SMURFS_FINISH })
        dispatch({
          type: act.FETCH_SMURFS_RECEIVED,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({ type: act.FETCH_SMURFS_FINISH })
      });
  }
}

export function deleteSmurf(id) {
  console.log('deleting...');

  return dispatch => {
    dispatch({ type: act.FETCH_SMURFS_START })
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: act.FETCH_SMURFS_FINISH })
        dispatch({
          type: act.FETCH_SMURFS_RECEIVED,
          payload: res.data
        })
      })
      .catch(err => {
        console.log('error:', err);
        dispatch({ type: act.FETCH_SMURFS_FINISH })
      });
  }
}

