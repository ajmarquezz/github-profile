import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import Profile from '../containers/Profile';
import SliderComponent from './Slider';


function App() {
  const [currentTab, setCurrentTab] = useState('profile');


  return (
    <div> 
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Navbar.Brand href="#">{currentTab}</Navbar.Brand>
        <Nav className="justify-content-end" style={{flex:'1'}}>
          <Nav.Link eventKey={1} href="#slider"onClick={()=> setCurrentTab('slider')}>Slider</Nav.Link>
          <Nav.Link eventKey={2} href="#profile" onClick={()=> setCurrentTab('profile')}  >Profile</Nav.Link>
        </Nav>
      </Navbar>
      <div>
        {currentTab==='slider' ? <SliderComponent /> : false}
        {currentTab==='profile' ? <Profile /> : false}
      </div>
    </div>
  );
}

export default App;
