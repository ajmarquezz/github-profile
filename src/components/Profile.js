import React, { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';


   const Profile = props => {

        const user = 'Alfonso';
        const [userInfo, setUserInfo] = useState({});
        const [editing, setEditing] = useState(false);
    
    useEffect(() => {
        props.fetchProfile();
        console.log(props);
    }, [props]);
    
        const showMessage = () => {
          alert('User is: ' + user);
          console.log(userInfo);  
        };
      
        const handleClick = () => {
          setTimeout(showMessage, 1000);
        };
      
        const updateValue = event =>  
            setUserInfo({
            userInfo,
            [event.target.name]: event.target.value
            },  console.log('updateValue ran')
            
            );
            // var userInfoCopy = JSON.parse(JSON.stringify(userInfo));
            // userInfoCopy[] = event.target.value;
            // setUserInfo(userInfoCopy);
            // console.log(userInfoCopy);

  return (
    <div className="container">
        <button onClick={handleClick}>Button</button>
        <hr></hr>
        <Button onClick={()=> setEditing(!editing)}>
        Edit Name</Button>
        <hr></hr>
        {editing ? 
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
                name="name"
                type="text" 
                placeholder="Enter name" 
                value={props.profile.login}
                onChange= {e => updateValue(e)}
            />
            <Form.Text className="text-muted">
            Input Login Name
            </Form.Text>
        </Form.Group>
        : 
            <div>
            <p><strong> { props.profile.login } </strong></p>
            </div>
        }
    </div>
  );
};

export default Profile;
