import React,{Component} from 'react'
import {Formik,Field,ErrorMessage, FieldArray} from 'formik'
import * as  Yup from 'yup'
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
   <ErrorMessage name='name'/>
   
   <br/>
   

<label>Last Name </label>  :  <Field name="lasteName"/>
  <br/>
   <ErrorMessage name='lasteName'/>

<br/>
<label>Email </label>  :  <Field type="Email" name="email"/>
  <br/>
   <ErrorMessage name='email'/>

<br/>
<label>skills </label>  :
 <Field component="select" name="skills">
 <option>Laravel</option>
 <option>ReactJs</option>
 <option>Bootstrap</option>

 </Field>
   <br/>
   <ErrorMessage name='skills'/>
   
   <br/>
   

<label>Active </label>  :  <Field name="active" type="checkbox"/>
<br/>
<label>Mobile </label>  :  <Field name="category" value="mobile" type="radio"/>
<br/><label>Phone </label>  :<Field name="category" value="phone" type="radio"/> 
<br/>
   <ErrorMessage name='category'/>

<br/>

<br/>
<label>Facebook </label>  :  <Field type="text" name="socials.facebook"/>
  <br/>
   <ErrorMessage name='socials.facebook'/>

<br/>
<br/>
<label>Twitter </label>  :  <Field type="text" name="socials.twitter"/>
  <br/>
   <ErrorMessage name='socials.twitter'/>

<br/>
<br/>
<label>Instagram </label>  :  <Field type="text" name="socials.instagram"/>
  <br/>
   <ErrorMessage name='socials.instagram'/>

<br/>
<FieldArray
name="friends"
render={
   arrayHelper=>(

   	 <div>
   	   {props.values.friends.map((item, index)=>

			<div key={index}>

			   <Field name={`friends.${index}`} />
			           <button type="button" onClick={()=>arrayHelper.remove(index)}>Done!!</button>
			

   <ErrorMessage name={`friends.${index}`} /><br />



			</div>
			        



   	   	)}


			           <button type="button" onClick={()=>arrayHelper.push()}>add!!</button>



   	 </div>







   	)

}



/>








   <button type="submit">Send</button>




   </form>




			)
	}

schema=()=>

	{
		const schema = Yup.object().shape({

			name: Yup.string().required(),

			lasteName: Yup.string().required(),
			email: Yup.string().required(),
			category: Yup.string().required(),
			skills: Yup.string().required(),
			socials:Yup.object().shape({
                facebook: Yup.string().required('facebook  is required'),
                twitter :Yup.string().required('twitter is required'),
			instagram: Yup.string().required('instagram is required'),

			

			}),

	 friends: Yup.array().of(
        Yup.string().required('Required '),
      )

			
		})
		return schema
		
	}




	render()
	{
		return (
<Formik
initialValues={{
	name:"",
	lasteName:'',
	email:'',
	skills:'',
	active:true,
	category:'',
    socials:{
    	facebook:'',
    	twitter:'',
    	instagram:''
    },
    friends:['saif','bessem','amir'],
    phoenNumber:[
    {
    	number:'50908869',
    	extension:'orange'
    },
    {
    	number:'20020442',
    	extension:'oredoo'
    }
    ]
}}
onSubmit={this.showName}

render={this.form}
validationSchema={this.schema()}
/>
)
	}
}
export default FormikForm