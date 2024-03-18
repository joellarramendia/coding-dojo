import React, {Component} from 'react';
import './PersonaCard.component.css';

class PersonaCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    handleBirthdayClick = () => {
        this.setState(prevState => ({
            age: prevState.age + 1
        }));
    }

    render() {
        const {firstName, lastName, hairColor, btnBirthday} = this.props;
        const { age } = this.state;
        return(
            <div>
                <h2>{lastName} {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>

                <button className='btn' onClick={this.handleBirthdayClick}>Birthday Button for {btnBirthday}</button>
            </div>
        );
    }
}

export default PersonaCard;