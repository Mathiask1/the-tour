import React from 'react';
import '../styles/App.css';
import Card from "./Card";

class Principles extends React.PureComponent {
  render() {
    return (
      <div className='bg-image1'>
        <div className='section-tp'>

          <section>Our Principles</section><br /><br />
          <p>The Tour is based around the following core principles:<br></br><br></br>

            <ul class="list-inline">
              <li class="list-inline-item"><Card title={"Teamwork"} text={"The foundation of the TOUR is built on teamwork. We expect everyone to cooperate and follow orders from the chain of command throughout missions."}></Card></li>
              <li class="list-inline-item"><Card title={"Custom Missions"} text={"Our missions are all built in-house, and aims to provide realistic and fun objectives. All our missions are built to be replayable, and can be solved in different ways"}></Card></li>
              <li class="list-inline-item"><Card title={"Casual Milsim"} text={"The TOUR is first and foremost a community. We do not believe in out-of-mission commands structures, and as such anyone can play any role during misisons, granted they're available."}></Card></li>
            </ul>

            <br></br><br></br>We aim to provide a realistic yet casual take on the MILSIM aspect of the ArmA games Series.<br></br><br></br>

            While Tour does utilize a chain of command, it’s limited to specific missions only, meaning anyone is allowed lead fireteams, squads and even the whole platoon during missions. <br></br><br></br>
            The Tour is not limited to any one branch of military, but rather focuses on a diverse set of missions at land, air, and sea. <br></br><br></br>
            The Tour is Active every Saturday evening, and is open to anyone who wish to participate. Only requirements is the ability to communicate, exercise teamwork, and follow the chain of command. <br></br><br></br>
          </p>

        </div>
      </div>
    );

  }
}

export default Principles;