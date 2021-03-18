import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                 <h1>Home</h1>
                <div className='row'>
               
                    <div className='col-5'>
                  
                <input
                type="text"
                id="text"
                className="new-inputs"
                required
                placeholder="Username"
                style={{ width: "90%" }}
               
              />
              <input
                type="email"
               
                id="email"
                className="new-inputs"
                required
             
                placeholder="Email"
                style={{ width: "90%" }}
               
              />
              <input
                type="password"
   
                id="password"
                className="new-inputs"
                required
          
                placeholder="Password"
                style={{ width: "90%" }}
              
              />
              <input
                type="password"
           
                id="re-password"
                className="new-inputs"
                required
         
                placeholder="Re-Enter Password"
                style={{ width: "90%" }}
       
              />
             
              <button
                className="new-inputs"
           
                style={{
                  textAlign: "center",
                  padding: 0,
                  backgroundColor: "#ffd978",
                  fontWeight: "bold",
                  opacity: 1,
                  // width: "41%",
                }}
                type="submit"
              >
                Create Admin
              </button>
                    </div>

                </div>
                
            </div>
        )
    }
}
