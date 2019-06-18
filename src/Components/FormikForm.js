import React,{Component} from 'react'
import {Formik,Field} from 'formik'
import Yup from 'yup'
class FormikForm extends Component
{
	showName=(value)=>
	{
		console.log(value)
	}
	form=(props)=>
	{
		return (


   <form onSubmit={props.handleSubmit}>
<label>Name </label> : <Field name="name"/>
   
   <br/>
   

<label>Last Name </label>  :  <Field name="lasteName"/>
<br/>
<label>Email </label>  :  <Field type="Email" name="email"/>
<br/>
<label>skills </label>  :
 <Field component="select" name="skills">
 <option>Laravel</option>
 <option>ReactJs</option>
 <option>Bootstrap</option>

 </Field>
   <br/>
   

<label>Active </label>  :  <Field name="active" type="checkbox"/>
<br/>
<label>Mobile </label>  :  <Field name="category" value="mobile" type="radio"/>
<br/><label>Phone </label>  :<Field name="category" value="phone" type="radio"/> 
<br/>
<br/>
   <button type="submit">Send</button>




   </form>




			)
	}
	render()
	{
		return (
<Formik
initialValues={{name:"",lasteName:'',email:'',skills:'',active:true,category:''}}
onSubmit={this.showName}

render={this.form}
ValidationSchema={this.schema}
/>
)
	}
}
export default FormikForm