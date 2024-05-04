import React from 'react';
import '../styles/App.css';
import YoutubeEmbed from "./YoutubeEmbed";

class About extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    return (

      <div className='section'>
        <div className='solid-bg'>

          <section>About the Tour</section><br /><br />
          <p className='solid'>The Tour of Teamrespawn is a community of gamers that play coop and team-orientated games. <br></br><br></br>

            Established in 2003 in the PC game Vietcong the concept of the Tour was to have players working together in the co-operative game mode. To strengthen the need to work together teamrespawn was enabled and a set of rules were enforced.<br></br><br></br>

            Today the Tour still stands behind its original concept, which it has developed into a standard for playing co-operative games. Further the Tour has expanded into playing other co-operative and team-orientated games.   <br></br><br></br>
          </p>
          <div className='media-box'>
            <YoutubeEmbed embedId="TrVH2YldbZ4" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;