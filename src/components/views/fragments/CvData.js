import React from "react";
import Badge from 'react-bootstrap/Badge';

function PersonalCard(props) {


  return (

    <div className="expHolder">
        
      <h4 className="charge">{props.job}  <Badge bg="light" text="dark">{props.anios}</Badge></h4>

      <p> {props.data}</p>
    </div>
  );
}

export default PersonalCard;