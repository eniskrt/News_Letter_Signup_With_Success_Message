import React from 'react'
import { Button, Card, CardBody, Col, Form, Image, Row } from 'react-bootstrap'
import banner from "../../assets/images/illustration-sign-up-desktop.svg"
import "./style.scss"
import * as Yup from "yup"
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const MainCard = ({setEmail}) => {

  const navigate = useNavigate()

  const initialValues = {
    email:""
  }

  const validationSchema = Yup.object({
    email:Yup
        .string()
        .email("Valid email required")
        .required("Email is required")
  })

  const onSubmit = () => {
    // console.log(formik.getFieldMeta("email").value);
    setEmail(formik.getFieldMeta("email").value)
    navigate("/success")
    
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <Card className='main-card'>
      <Row>
        <Col md={7}>
          <CardBody className='card-body'>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product mangers reeceiving monthly updates on:</p>
          <ul className='list'>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <Form className='form' noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className='group'>
              <Form.Label className='label'>Email address</Form.Label>
              <Form.Control
                  type='email'
                  placeholder='email@company.com'
                  className='input'
                  {...formik.getFieldProps("email")}
                  isInvalid={formik.touched.email && formik.errors.email}
                  />
              <Form.Control.Feedback type='invalid' className='feedback'>
                  {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type='submit'>Subscribe to monthly newsletter</Button>
          </Form>
          </CardBody>
        </Col>
        <Col md={5}>
          <Image src={banner} alt='banner' className='card-img'/>
        </Col>
      </Row>
    </Card>
  )
}

export default MainCard
