import React, { Component } from 'react'
import '../App.css';
export default class Products extends Component {
      state={
        currentImg:'https://i.imgur.com/PTgQlim.png'
      }
    render() {
        return (
            <div className='container' style={{boxSizing:'border-box'}}>
                <h1>Products</h1>
                    <div className='row ' >
                        <div className='col-lg ' >
                            <div> 
                            <img className='pro-img' style={{width:'300px',height:'300px'}} src={this.state.currentImg}/>
                            </div>
                            
                        </div>
                        <div  className='col-lg '>
                        <div className="thumb-img">
                            <div  > 
                            <img onClick={()=>this.setState({currentImg:'https://i.imgur.com/PTgQlim.png'})} src='https://i.imgur.com/PTgQlim.png' style={{width:'150px',height:'150px',marginRight:'2px'}} />
                            </div>
                            <div  > 
                            <img onClick={()=>this.setState({currentImg:'https://i.imgur.com/Mplj1YR.png'})} style={{width:'150px',height:'150px',marginRight:'2px'}} src='https://i.imgur.com/Mplj1YR.png'/>
                            </div>
                            <div  > 
                            <img onClick={()=>this.setState({currentImg:'https://i.imgur.com/xSIK4M8.png'})} style={{width:'150px',height:'150px',marginRight:'2px'}} src='https://i.imgur.com/xSIK4M8.png'/>
                            </div>
                            <div  > 
                            <img onClick={()=>this.setState({currentImg:'https://i.imgur.com/iOeUBV7.png'})} style={{width:'150px',height:'150px'}} src='https://i.imgur.com/iOeUBV7.png'/>
                            </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
}
