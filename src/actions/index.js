import axios from 'axios'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const READ_EVENTS = 'READ_EVENTS';
//export const readEvents = () => ({ type: READ_EVENTS });
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  //console.log(response)
  dispatch({ type: READ_EVENTS, response })
}
