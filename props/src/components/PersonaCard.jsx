import React, {Component} from "react";

class PersonaCard extends Component {
  render() {
    const {fistName, lastName, age, hairColor} = this.props;
    return (
      <div>
        <h1>{lastName}, {fistName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
      </div>
    );
  }
}

export default PersonaCard;