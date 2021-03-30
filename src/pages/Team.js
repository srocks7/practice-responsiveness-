import React, { Component } from 'react'
import axios from 'axios'
import { MDBTable, MDBTableBody, MDBTableHead ,MDBInput} from 'mdbreact';
export default class Team extends Component {
    
        state = {
         t:[],
         loading:'false'
      
    };
    async  componentDidMount() {
     
         const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        // await new Promise(x=> setTimeout(x,1000))
       
          this.setState({t:response.data,loading:'true'})
        
      }
    render() {
        console.log(this.state.t)
        const data = {
          columns: [
            {
              label: 'UserId',
              field: 'userId',
              sort: 'asc',
           
            },
            {
              label: 'Id',
              field: 'id',
              sort: 'asc',
             
            },
            {
              label: 'Title',
              field: 'title',
              sort: 'asc',
           
            },
           
            {
              label: 'Check',
              field: <MDBInput type="checkbox" />,
              sort: 'asc',
             
            }
          ]
        }
        return (
            <div>
                <h1>Team</h1>
                <div className='container'>
                  <div className='row'>
                  {/* <div className='col' style={{overflowY:'scroll' ,height:'70vh'}}>
                 
                      {this.state.loading==='true' ? (
                           <ul className="list-group">
                        {this.state.t.map((user)=>(
                                                    
                            <li key={user.id} className="list-group-item d-flex bg-dark justify-content-between align-items-center text-black">
                            {user.title} &nbsp;&nbsp;&nbsp;
                            {user.id}
                            <span>
                                <input type='checkbox' checked={user.completed}/>
                            </span>
                            </li>

                        ))}
                          </ul>
                      ) : (
                        <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      )}
                   
                   
                    </div> */}
                    <div className='col bg-light'  style={{overflowY:'scroll' ,height:'70vh'}} >
                   {this.state.loading==='true'? ( 
                   <MDBTable responsive hover autoWidth bordered>
                    <MDBTableHead columns={data.columns} />
                    <MDBTableBody rows={ this.state.t} />
                  </MDBTable>): 
                  ( <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>)
                  } 
                  
                   </div>
                  </div>
                    
                </div>
            </div>
        )
    }
}
