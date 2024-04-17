import React, { useState, useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    form_produit: '',
    form_number: '',
    from_email :''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hitwivl', 'template_ul4otng', form.current, '_RsuJRkBTXoJJbTUx')
      .then((result) => { 
        alert('شكرا على ثقتكم 🙏   سنتواصل معكم في أقرب وقت ممكن');
      
          console.log(result.text);

      }, (error) => {
 
          alert('المرجو ادخال جميع المعلومات');
        
      });
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className ="m-4" controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="from_name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className ="m-4" controlId="formProductId">
              <Form.Label>numero de produit</Form.Label>
            
               <Form.Select  name="form_produit"
                value={formData.form_produit}
                onChange={handleChange}
                required aria-label="Default select example">
    <option></option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
  </Form.Select>
            </Form.Group>
            <Form.Group className ="m-4" controlId="formPhone">
              <Form.Label>numero de telephone</Form.Label>
              <Form.Control
                type="tel"
                name="form_number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className ="m-4" controlId="formPhone">
              <Form.Label>la ville</Form.Label>
              <Form.Control
                type="text"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </Form.Group>
           
   
            <div style={{width: "100%", display:"flex",margin:"20px",alignItems: "Center"}}>
              <Button style={{backgroundColor:"#198754"}} type="submit" onSubmit={sendEmail}> 
              Commander
            </Button></div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;