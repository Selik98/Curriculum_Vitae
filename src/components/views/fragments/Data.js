import React from "react";

function PersonalCard(props) {



  return (
    <div>
        <h4 className="sub">{props.title}</h4>
        <p className="contactData">{props.data}</p>
    </div>
  );
}

export default PersonalCard;