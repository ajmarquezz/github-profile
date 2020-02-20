import React from 'react';
import Slider from 'react-slick'
// import { Navbar, Nav } from 'react-bootstrap';

function SliderComponent(props) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
      <p> Slider Tab </p>
      <Slider {...settings}>
        <div>
          <h3>{props.profile.name}</h3>
        </div>
        <div>
         <img src={props.profile.avatar_url}/>
        </div>
        <div>
          <h3>{props.profile.bio}</h3>
        </div>
        <div>
          <h3>{props.profile.location}</h3>
        </div>
        <div>
          <h3>{props.profile.company}</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
 