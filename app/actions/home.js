export const RECEIVE_DATA = 'RECEIVE_DATA';

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data: data
  }
}

export function dispatchAsync() {
  return (dispatch, getState) =>
    ethhw.dummyAsync().then(
      function(data) {
        dispatch(receiveData(data))
      }
    )
}

export function dispatchSync() {
  return (dispatch, getState) =>
    ethhw.dummySync().then(
      function(data) {
        dispatch(receiveData(data))
      }
    )
}