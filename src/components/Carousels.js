import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'

export default class Carousels extends Component {
    render() {
        return (
            <div>
                <Carousel>
  <Carousel.Item className='carousal-item'>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='carousal-item'>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/sunset-in-the-amazon-rainforest-river-basin-picture-id984498052"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='carousal-item'>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/amazon-rainforest-sunset-reflection-picture-id1143075360?s=612x612"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}
