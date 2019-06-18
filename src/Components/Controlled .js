import React,{Component} from 'react'

class Controlled extends Component

{
	state ={
		value:"",
		test:'test success',
		selectValue:'codingnter',
		checked:false
	}
	setValue =(event)=>
	{

    this.setState({
    	value:event.target.value
    })
console.log(event.target.value)
 	}

 	selectValue_edit =(event)=>
 	{
 		 this.setState({
    	selectValue:event.target.value
    })
 	}
	render()
	{
		return <div>
		<h1>Controlled Component :   {this.state.value}</h1>

         <input type="text" value={this.state.value} onChange={this.setValue}/>
<br/>
<br/>
         <textarea value={this.state.value} onChange={this.setValue}/>
         <br/>
<br/>

<select  value={this.state.selectValue} onChange={this.selectValue_edit}>
<option value="laravel">laravel</option>
<option value="symfony">symfony</option>
<option value="codingnter">codingnter</option>
<option value="zend">zend</option>

</select>
<br/>
<br/>
         <input type="checkbox" checked={this.state.checked}/>

		</div>
	}
}
export default Controlled