import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { getEvent, deleteEvent, putEvent } from '../actions';

class EventsShow extends Component{
  constructor(props){
    super(props)
     //バインドは決まり事
    this.onSubmit = this.onSubmit.bind(this) 
    this.onDeleteClick = this.onDeleteClick.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)  //バインドは決まり事
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if(id) this.props.getEvent(id)
  }

  renderField(field){
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  async onDeleteClick(){
    /**
     * console.log( this.props.match )
     * > isExact: true
     * > params: {id: "1"}
     * > path: "/events/:id"
     * > url: "/events/1"
     */
    const {id} = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  render() {
    // バリデーションチェックの条件
    // pristine:更新されていない
    // submitting:submitが押下済み
    // invalid:無効（null）の場合
    const { handleSubmit, pristine, submitting, invalid } = this.props
    //console.log({submitting})
    return  (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
          <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

          <div>
            <input type="submit" value="SUBMIT" disabled={pristine || submitting || invalid}  />
            <Link to="/">CANCEL</Link>
            <Link to="/" onClick={this.onDeleteClick}>DELETE</Link>
          </div>
        </form>
        <div>show event page</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, state }
}

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

const validate = values =>{
  const errors = {}
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors;
}
export default connect(mapStateToProps, mapDispatchToProps )(  // deleteEventを関数として認識する箇所
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true} )(EventsShow)
)
