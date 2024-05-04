import React from 'react';
import '../styles/App.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel from '../components/Carousel'

class Gallery extends React.PureComponent {
  render() {
    return (
      <div className='section'>
        <div className='media-box'>
          <Carousel>
            <img src="media/1.jpg" alt="placeholder" />
            <img src="media/2.jpg" alt="placeholder" />
            <img src="media/3.jpg" alt="placeholder" />
            <img src="media/4.jpg" alt="placeholder" />
            <img src="media/5.jpg" alt="placeholder" />
            <img src="media/6.jpg" alt="placeholder" />
          </Carousel>
        </div>
      </div>
    )
  }
}

export default Gallery;