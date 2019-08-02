import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import UserDetails from './components/UserDetails';
const router=(
    <Router>
      <div>
      
            <Route path="/main" component={Main}/>
         
            <Route path="/users/:id" component={UserDetails}/>
      </div>
     
     <ul>
       
         <li><Link to="/main">List Movies</Link></li>
      
     </ul>
    </Router>
)

ReactDOM.render(
    router, 
    document.getElementById('root'));

