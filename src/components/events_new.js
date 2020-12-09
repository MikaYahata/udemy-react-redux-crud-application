import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { postEvent } from '../actions';

class EventsNew extends Component{
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)  //バインドは決まり事
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
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    console.log({submitting})
    return  (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
          <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

          <div>
            <input type="submit" value="SUBMIT" disabled={pristine || submitting}  />
            <Link to="/">CANCEL</Link>
          </div>
        </form>
        <div>new event page</div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = ({ postEvent })

const validate = values =>{
  const errors = {}
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors;
}
export default connect(null, mapDispatchToProps )(  // postEventを関数として認識する箇所
  reduxForm({ validate, form: 'eventNewForm'})(EventsNew)
)
