import React from 'react';
import Axios from 'axios';
export default class UserDetails extends React.Component{
    constructor(){
        super();
 this.state={
        
        user:[]
        
    }
    }
    componentDidMount(){
        var id = this.props.match.params.id;
        console.log(`id is ${id}`)
        console.log(id)
        Axios.get('http://localhost:8000/api/movies/'+id)
        .then(res =>{
            this.setState({
                user: res.data.data
            })
        })
       
    }
    render(){
       

        return(
            <div>
                <h3>MOVIENAME</h3> <h3
className="card-title">{this.state.user.name}</h3>

<h3>MOVIEID</h3> <p
className="card-title">{this.state.user._id}</p>
  <h3>Duration</h3> <p
className="card-title">{this.state.user.duration}</p>              
            </div>
        )
    }
}