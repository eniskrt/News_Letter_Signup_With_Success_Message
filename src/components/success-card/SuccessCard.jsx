import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import image from "../../assets/images/icon-success.svg";
import "./style.scss"
import { useNavigate } from 'react-router-dom';

const SuccessCard = ({email}) => {

  const navigate = useNavigate()
  
  return (
    <Card className='success'>
      <Card.Body>
      <Image src={image} className='success-image' alt="success image"/>
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <span>{email}</span>.Please open it and click the button inside to confirm your subscription.</p>
        <Button className='dismiss' onClick={()=>navigate("/")}>Dismiss Message</Button>
      </Card.Body>
    </Card>
  )
}

export default SuccessCard
