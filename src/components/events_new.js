import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

//import { postEvent } from '../actions';

class EventsNew extends Component{
  render() {
    return  (
      <React.Fragment>
        <div>new event page</div>
      </React.Fragment>
    )
  }
}

//const mapDispatchToProps = ({ postEvents })

export default connect(null, null/* mapDispatchToProps */)(EventsNew)
