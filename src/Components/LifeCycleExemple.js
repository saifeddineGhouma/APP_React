import React ,{ Component } from 'react';


class LifeCycleExemple extends Component
{
	constructor(props)
	{
   super(props);
   this.state={
  	time: new Date()
  }

	}

	componentDidMount()
	{

		setInterval( ()=>{
		 this.setState({ 
		 	time: new Date()

		 	 })

		},100 )
	}
	render(){

		return <div>
		<h1>LifeCycleExemple</h1>
		<h2>Time is  : </h2> {this.state.time.toLocaleTimeString('ar-TN')}




		</div>
	}
}

export default LifeCycleExemple