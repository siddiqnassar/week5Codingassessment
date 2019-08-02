import React,{Component} from 'react';
import { Link } from 'react-router-dom'
export default class User extends Component {
    constructor(){
        super();
        // this.details=this.details.bind(this);
    }
    // details(){
    //     console.log(this);
    //     console.log('Came inside click function of product');
    // }

    render(){
        console.log(this.props)
        return  (
            <div className="card" style={{width: 18 +'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{ this.props.title.toUpperCase()}</h5>
                    <p className="card-text">{this.props.id}</p>
                    <p className="card-text">{this.props.duration}</p>
                    <Link to ={`/users/${this.props.id}`}>Details</Link>
                </div>
                </div>
        );
    }
}
