import React ,{ Component } from 'react';


class Liste extends Component

{


	render(){
const skills  =["php", "js","java","c#"]


		return <div> 
		<ul>
             {skills.map(item=><li key={item}>{item}</li>)}

</ul>
		</div>
	}

}

export default Liste;