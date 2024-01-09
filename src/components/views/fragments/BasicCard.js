import React, { useState,useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";


function BasicCard(props) {
  const [showAlert, setShowAlert] = useState(false);
  const buttonRef = useRef(null);
  const currentButtonRef = buttonRef.current
  
  useEffect(() => {
    if (currentButtonRef && props.adressGithub === "En Mantenimiento") {
      currentButtonRef.addEventListener("click", handleButtonClick);
    }

    return () => {
      if (currentButtonRef) {
        currentButtonRef.removeEventListener("click", handleButtonClick);
      }
    };
  });

  const handleButtonClick = (e) => {

    if (props.adressWebsite === "En Mantenimiento" || props.adressWebsite === "No Disponible" ) {
      e.preventDefault();
      setShowAlert(true);      
    }
 
    
  };


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} alt={props.name} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        {showAlert && (
          <Alert key="danger" variant="danger">
            Sitio Web {props.adressWebsite}
          </Alert>
        )}
        <div className="cardbutton">
          <Button
            variant="primary"
            className="sitebutton"
            href={props.adressGithub}
          >
            Ver Proyecto
          </Button>
          <Button
            variant="success"
            className="sitebutton"
            href={props.adressWebsite}
            onClick={handleButtonClick}
          >
            Ver Sitio Web
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
