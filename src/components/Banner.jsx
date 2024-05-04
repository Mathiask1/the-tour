import React from 'react';
import '../styles/App.css';
import logo from '../resources/tour_logo.png'


class Banner extends React.PureComponent {
    render() {
        if (true) {
            return (
                <div className='section'>
                    <img className='banner' src={logo} alt="loading..." />
                </div>
            )
        }
    }
}

export default Banner;