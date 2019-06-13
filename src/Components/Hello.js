import React ,{ Component } from 'react';



class Hello extends Component
{
	constructor(props)
	{
   super(props);
   this.incrimante=this.incrimante.bind(this)

	}
	state= {
		age:26,
		users:{
			name:"saifEddine",
			last_name:"ghouma"
		},

		social:['facebook','twitter','google plus']
	}
	edit(event)
	{
				const new_name=event.target.value
		this.setState({
			users:{
				...this.state.users,
               	name:new_name,
               //	last_name:this.state.users.last_name
               }

		}
               
			)

		
	}
	update = (event)=>
	{
		//console.log(event.target.value)
	}
	Decriment = ()=>
	{
		this.setState({age:this.state.age - 1})
	}
	incrimante()
	{
				this.setState({age:this.state.age + 1})

	}
	render(){

		return <div> 
		<h1>  Hello  {this.props.name}</h1>


            Name: {this.state.users.name} {this.state.users.last_name} <br/>

            Social : {this.state.social[0]}

		<p> Age:  {this.state.age}</p>


		<button onChange={this.update(this.state.age)}>Edit </button>
		<input type="text" onChange={this.update.bind(this)}/>
				<input type="text" onChange={this.edit.bind(this)} value={this.state.users.name}/>

		
		</div>
	}
}

export default Hello;
