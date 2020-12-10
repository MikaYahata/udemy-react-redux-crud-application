import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { postEvent } from '../actions';

class EventsNew extends Component{
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)  //バインドは決まり事
  }
  renderField(field){
    const { input, label, type, meta: { touched, error } } = field
    return (
      <TextField
        hintText={label}
        floatingLabelFixed={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
      // <div>
      //   <input {...input} placeholder={label} type={type} />
      //   {touched && error && <span>{error}</span>}
      // </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    //console.log({submitting})
    const style = {margin:12}
    return  (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
          <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
          <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
          <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />}/>
        </form>
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
