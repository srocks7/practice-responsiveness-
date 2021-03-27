import React, { Component } from 'react'
import axios from 'axios'
export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
         t:[]
        };
    }
    async  componentDidMount() {
        try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
          console.log(response);
           this.setState({t:(response.data)})
        } catch (error) {
          console.error(error);
        }
      }
    render() {
        console.log(this.state.t)
        return (
            <div>
                <h1>Team</h1>
                <div className='container'>
                  
                {/* <ul>
                  {this.state.t.map((user)=>(
                   <li>{user.id}</li>
                  ))}
                </ul> */}
                {/* {this.state.t.userId} */}
             
                </div>
            </div>
        )
    }
}
