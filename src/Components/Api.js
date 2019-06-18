import React,{Component} from 'react'
import axios from 'axios';

class Api extends Component
{
	 state = {
    persons: []
  }
   componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

	render(){
		return ( <ul> 
        { this.state.persons.map(person => <li>{person.name}  || {person.email} ||{person.phone} </li>)}
      </ul>)
	}
}

export default Api