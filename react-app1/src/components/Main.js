import React from 'react';
 import User from './User';
import Axios from 'axios';
//import { exportNamespaceSpecifier } from '@babel/types';
export default  class Main extends React.Component {
    
    constructor(){
        super();
 this.state={
        phones:[],
        userList:[]
        
    }
        this.selectedProduct=this.selectedProduct.bind(this);
        this.newPhone=this.state.phones;
    }
   
    selectedProduct(data){
        const filteredList=this.newPhone.filter(phone=>phone.name!==data);
        this.setState({
         phones:filteredList
        });
    }
     componentDidMount(){
        console.log(`Component is mounted on the DOM`)
      Axios.get('http://localhost:8000/api/movies')
        .then(res =>{
            this.setState({
                userList : res.data.data
            })
        })
        
        
       this.newPhone=[
        {
            name:'Iphone',
            desc:'Latest iphone from apple'
        },
        {
            name:'One plus 6',
            desc:'flagship from oneplus'
        },
        {
            name:'Samsung',
            desc:'High performance'
        }
    ]
   
    this.setState({
        phones:this.newPhone
    });
}
    render(){
   
    return (
        <div className="left">
            {
                this.state.userList.map((user,index) => <User 
                                            key={index} 
                                            id={user._id}
                                            title={user.name} 
                                            duration={user.duration}
                                            selected = {this.selectedProduct}/>)
            }
        </div>
    );
}
    // return (
    //     <div className="left">
    //      {phones.map((phone,index) => <Card key={index} title={phone.name} body={phone.desc} />)}
    //     {/* {phones.map(phone => <Card title={phone.name} body={phone.desc}/>)} */}
    //         {/* <Card title={titleMessage} body="Text Content"/>
    //         <Card/>
    //         <card title="Samsung S10" body="Brand new design with performance"></card> */}
    //        </div>
    // );
}
