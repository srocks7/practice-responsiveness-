import React, { Component } from 'react'

export default class Messages extends Component {
    constructor(props){
        super(props);
       
    }
    render() {
        return (
            <div className='container' >
                <div className='row ' >
                   
                    <div className='col-md-4 col-lg-4'>
                    <div className="card mt-5 " style={{width:'12rem'}}>
                        <img className="card-img-top" style={{height:'12rem'}} src="https://i.picsum.photos/id/588/200/300.jpg?hmac=Bb5mvfvSw-sKhocAA4Mfdb78ysl5ktbClTt-Lc0IyWk" alt="Card image cap"/>
                        <div className="card-body text-dark">
                            <h5 className="card-title">{this.props.id}</h5>
                            <p className="card-text">{this.props.title}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                    {/* <div className='col-md-4 col-lg-4'>
                    <div className="card mt-5 " style={{width:'12rem'}}>
                        <img className="card-img-top" style={{height:'12rem'}} src="https://i.picsum.photos/id/588/200/300.jpg?hmac=Bb5mvfvSw-sKhocAA4Mfdb78ysl5ktbClTt-Lc0IyWk" alt="Card image cap"/>
                        <div className="card-body text-dark">
                            <h5 className="card-title">{this.props.id}</h5>
                            <p className="card-text">{this.props.title}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4'>
                    <div className="card mt-5 " style={{width:'12rem'}}>
                        <img className="card-img-top" style={{height:'12rem'}} src="https://i.picsum.photos/id/588/200/300.jpg?hmac=Bb5mvfvSw-sKhocAA4Mfdb78ysl5ktbClTt-Lc0IyWk" alt="Card image cap"/>
                        <div className="card-body text-dark">
                            <h5 className="card-title">{this.props.id}</h5>
                            <p className="card-text">{this.props.title}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div> */}
                  
                    

                </div>
               
            </div>
        )
    }
}
