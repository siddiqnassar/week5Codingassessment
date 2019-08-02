import React,{Component} from 'react';

export default class Card extends Component {
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
                    <p className="card-text">{this.props.body}</p>
                    <a className="btn btn-primary" onClick={()=>this.props.selected(this.props.title)}>Details</a>
                </div>
                </div>
        );
    }
}
