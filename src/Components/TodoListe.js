import React ,{Component} from 'react'


class TodoListe  extends Component

{
	state={
		new_Tech:"",
skills:[

    	{id:1,Tech:"React"},
    	{id:2,Tech:"Vue"},
    	{id:3,Tech:"Angular"},
    	{id:4,Tech:"Node"},
    	{id:5,Tech:"Symfony"},
    	{id:6,Tech:"Laravel"},
    	{id:7,Tech:"Spring"},


    	]
	}
	addskills =()=>
	{
		const skills=[...this.state.skills];

		skills.push({ Tech: this.state.new_Tech});

		this.setState({skills,new_Tech:''})
	}

	deleteskills=(props)=>
	{
		const skills=[...this.state.skills];
         skills.splice(props,1)

         this.setState({skills})
		

	}


	update_new_skills = (event) =>

	{
		this.setState({new_Tech : event.target.value})

	}
    render()
    {
    	
    	return <div>

    	<h1> liste skills</h1>
    	<ul>
    	{this.state.skills.map((skill,index)=><li key={index}>{index}--{skill.Tech} <button onClick={()=>{this.deleteskills(index)}}>Done!!</button></li> )}
        

         <input  value={this.state.new_Tech} onChange={this.update_new_skills}/>

         <button onClick={this.addskills}>Add</button>
    	</ul>

    	</div>
    }
}

export default TodoListe;