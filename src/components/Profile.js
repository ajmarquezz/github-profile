import React, { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';


   const Profile = props => {

        const user = 'Alfonso';
        const [userInfo, setUserInfo] = useState(props.profile);
        const [editing, setEditing] = useState(false);
    
        //componentdidmount
    useEffect(() => {
        props.fetchProfile();
        console.log(props);
    }, []);

        //componentwillreceiveprops
    useEffect(() => {
      console.log('Prop Received: ', props.profile.name,props.profile.bio,props.profile.location,props.profile.company);
      setUserInfo(props.profile);
  }, [props.profile])
    
        const showMessage = () => {
          alert('User is: ' + user);
          console.log(userInfo);  
        };
      
        const handleClick = () => {
          setTimeout(showMessage, 1000);
        };
      
        const updateValue = event =>  
            setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
            },  console.log(`updateValue ran`)
            
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
        Edit Github Profile Information</Button>
        <hr></hr>
        {editing ? 
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
                name="name"
                type="text" 
                placeholder="Enter name" 
                value={userInfo.name}
                onChange= {e => updateValue(e)}
            />
            <Form.Text className="text-muted">
            Input Login Name
            </Form.Text>

            <Form.Control
                name="bio"
                type="text" 
                placeholder="Enter Bio" 
                value={userInfo.bio}
                onChange= {e => updateValue(e)}
            />
            <Form.Text className="text-muted">
            Input Bio
            </Form.Text>

            <Form.Control
                name="location"
                type="text" 
                placeholder="Enter location" 
                value={userInfo.location}
                onChange= {e => updateValue(e)}
            />
            <Form.Text className="text-muted">
            Input Location
            </Form.Text>

            <Form.Control
                name="company"
                type="text" 
                placeholder="Enter Company" 
                value={userInfo.company}
                onChange= {e => updateValue(e)}
            />
            <Form.Text className="text-muted">
            Input Company
            </Form.Text>
        </Form.Group>
        : 
            <div>
            <p><strong> Name: </strong> { userInfo.name } </p>
            <p><strong> Bio: </strong> { userInfo.bio }</p>
            <p><strong> Location: </strong> { userInfo.location }</p>
            <p><strong> Company:</strong> { userInfo.company }</p>
            </div>
        }
    </div>
  );
};

export default Profile;
