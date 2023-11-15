import React, { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';



function BasicCard(props) {

  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current && props.adressGithub === 'En Mantenimiento') {
      buttonRef.current.addEventListener('click', handleButtonClick);
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener('click', handleButtonClick);
      }
    };
  }, [props.adressGithub]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log('Botón clickeado, pero se previno el comportamiento predeterminado.');
  };

  // <Alert key='danger' variant='danger'> Sitio Web en Mantenimiento </Alert> Este irá cuando el sitio esté en mantenimiento

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} alt= {props.name}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <div className='cardbutton'>
        <Button variant="primary" className='sitebutton' href= {props.adressGithub}>Ver Proyecto</Button>
        <Button variant="success" className='sitebutton' href= {props.adressWebsite}>Ver Sitio Web</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;