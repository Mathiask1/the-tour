import React from 'react';
import '../styles/App.css';
import '../styles/Card.css';

class Card extends React.PureComponent {
    constructor({ title, text }) {
        super();
        this.title = title;
        this.text = text;
    }

    state = {
        open: false,
    };
    handleClick = () => {
        if (this.state.open) {
            this.setState({
                open: false,
            });
        } else {
            this.setState({
                open: true,
            });
        }
    };

    render() {
        return (
            <div className={"container " + (this.state.open ? "expand" : "")} onClick={this.handleClick}>
                <div className="upper">
                    <h3>
                        {this.title}
                        <svg className={"svg " + (this.state.open ? "rotate" : "rotatenormal")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
                        </svg>
                    </h3>
                </div>
                <div className="lower">
                    <h3>
                        {this.text}
                    </h3>
                </div>
            </div>
        )
    }
}

export default Card;