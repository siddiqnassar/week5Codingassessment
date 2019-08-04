import React from 'react'
import axious from 'axios'
import Axios from 'axios';

export default class AddMovie extends React.Component{

    constructor(){
        super();
        this.state={
        name : '',
        _id : 0,
        duration : 0
    }
  this.add=this.add.bind(this);
  this.change=this.change.bind(this);
    }
    change(event){
        const target = event.target;
        const value= target.value;
        const name=target.name;
    this.setState({
        [name] :value
    });
    }
    add(){
        let movie={
            name:this.state.name,
            _id:this.state._id,
            duration:this.state.duration
        }
        console.log(movie);

       Axios.post("http://localhost:8000/api/movies/insert",movie).then(res=>{console.log(res.data)});
    }
render(){
    return(
        <div>
            <h3>Enter Movie details</h3>
            <div className="card" style={{width: 18 +'rem', margin:10+'px'}}>
                    <form onSubmit={this.add}>
                    Id :   <input className="card-title" type="text" onChange={this.change} name="_id" value={this.state._id}></input><br />
                    Name : <input className="card-title" type="text" onChange={this.change} name="name" value={this.state.name}></input><br />
                    Duration :<input className="card-title" type="text" onChange={this.change} name="duration" value={this.state.duration}></input><br />
                   
                    <button className="btn btn-primary" type = "submit">Submit</button>
                    </form>
                </div>
        </div>
    )
}
}