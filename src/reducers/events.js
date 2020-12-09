import _ from 'lodash';
import { READ_EVENTS, DELETE_EVENT } from '../actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default (events = {}, action) => {
  switch( action.type )
  {
    case READ_EVENTS:
      // [{"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
      //  ...
      //  {"id":10,"title":"Let's have an event 10!","body":"This is the body for event 10."}]
      //  ↓↓↓↓
      // ｛
      //    1: {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
      //      ...
      //   10: {"id":10,"title":"Let's have an event 10!","body":"This is the body for event 10."}
      //  }

      //console.log(action.response.data)
      //console.log( _.mapKeys(action.response.data, "id"))
      return  _.mapKeys(action.response.data, "id");

    case DELETE_EVENT:
      //console.log(action.id)
      delete events[action.id]
      return { ...events };

    default:
      return events;
  }
}