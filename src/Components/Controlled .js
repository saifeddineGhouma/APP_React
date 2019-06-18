import React,{Component} from 'react'

class Controlled extends Component

{
	state ={
		value:"",
		test:'test success',
		selectValue:'codingnter',
		radio_value:"1"
	}
	setValue =(event)=>
	{
		const name=event.target.name

    this.setState({
    	[name]:event.target.value
    })
 	}

 	
 	 
 
	render()
	{
		return <div>
		<h1>Controlled Component :   {this.state.value}</h1>

         <input name="value" type="text" value={this.state.value} onChange={this.setValue}/>
<br/>
<br/>
         <textarea name="value" value={this.state.value} onChange={this.setValue}/>
         <br/>
<br/>

<select name="selectValue" value={this.state.selectValue} onChange={this.setValue}>
<option value="laravel">laravel</option>
<option value="symfony">symfony</option>
<option value="codingnter">codingnter</option>
<option value="zend">zend</option>

</select>
<br/>
<br/>
      

         <br/>
         <br/>
         <div onChange={this.setValue}>
               <input type="radio" name="radio_value"  value="1" defaultChecked defaultChecked ={this.state.radio_value === "1"} /> One <br/>

                <input type="radio" name="radio_value" value="2"  defaultChecked ={this.state.radio_value === "2"} />Two <br/>

          </div>

		</div>
	}
}
export default Controlled