import React from 'react';
import '../styles/Footer.css';

class Footer extends React.PureComponent {
    render() {
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 1
                }}
            />
        );

        return (
            <div className='footer'>
                <p>
                    <div className='media'>
                        <ColoredLine color="black" />
                        <footer>
                            <small>&copy; Copyright 2022 - {new Date().getFullYear()}, The Tour of Teamrespawn, Site Design by Mathias K.</small>
                        </footer>
                    </div>
                </p>
            </div>
        )
    }
}

export default Footer;