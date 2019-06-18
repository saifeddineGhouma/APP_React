import React ,{ Component } from 'react';


class Test  extends Component      
{

   render()
   {
   	let users =[

   	{
   		id:1,name:"seifEddine",last_name:'Ghouma',age:26
   	},
   	{
        id:2,name:"bessem",last_name:'Bourgaa',age:25
   	},
   	{
        id:3,name:"Amir",last_name:'Zerii',age:25
   	},
   	{
       id:4,name:"Med ",last_name:'Lamloum',age:24
   	},







   	] 
   	return <div>
   	<h1>Liste of users</h1>

   	<ul>
   	{users.map((user,index)=><li key={user.id}>{index}/{user.name} {user.last_name}   {user.age}</li>)}


   	</ul>



   	</div>
   }
}

export default Test