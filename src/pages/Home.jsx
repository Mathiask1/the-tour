import React from 'react';
import '../styles/App.css';
import '../styles/Frontpage.css';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Banner from '../components/Banner';
import Principles from '../components/Principles';
import Join from '../components/Join';
import Footer from "../components/Footer"


class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <Banner />
                <div className='frontPage-Body'>
                    <About />
                    <Principles />
                    <Join />
                    <Gallery />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;