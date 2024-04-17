import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { slides } from "../utils/data";
import { Stack } from 'react-bootstrap';


const Slider = () => (
  <Carousel className='slider text-center my-5'>
      <Carousel.Item key={1}>
          <Stack
    direction="horizontal"
    className="h-100 justify-content-center align-items-center"
    gap={2}
  >   {slides.map(slide => (
 
        <img
        style={{height : "508px !important", Width: "508px !important", 
      margin:"100px" }}
          src={slide.image}
          alt={slide.title}
        />
       /** <Carousel.Caption className='texto text-success'>
          <h1 className='text-success'>{slide.title}</h1>
          <p>{slide.content}</p>
    </Carousel.Caption> */
    ))}</Stack>
      </Carousel.Item>
  </Carousel>
);

export default Slider;