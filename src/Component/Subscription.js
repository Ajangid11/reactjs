import React from 'react';
import { useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';



function Subscription ()  {
    const [validated, setValidated] = useState(false);
    const [getform,setForm]=useState({});
    const[users,setUsers]=useState([]);

    const handleSubmit =async (event) => {
      // event.preventDefault();
      // console.log('event',event);return
      const form = event.currentTarget;
      // console.log(form)
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);

      const formData = new FormData();
 console.log( event.target.elements.file.files)
 // Update the formData object
//  for(let i=0;i<event.target.files.length;i++){
   
   
   formData.append(
     "myFile",
     event.target.elements.file.files[0],
     event.target.elements.file.files[0].name
     );
    // }
    formData.append('to',getform.to);
    formData.append('body',getform.body);
    formData.append('subject',getform.subject);
    console.log("formdata",formData)
    // return

     
      const response=await fetch('http://localhost:8080/demo',{
        method:'POST',
        // body:JSON.stringify(getform),
        body:formData
        // headers:{
        //  'Content-Type':'application/json'
        // }
      })
      // const data=await response.json();
      console.log("data",formData)
      
    };

    const getUser=async()=>{
      const response=await fetch('http://localhost:8080/demo',{
         method:'GET',
       })
       const data=await response.json();
      //  console.log(data)
      //  setUsers(data)
    }
  
    useEffect(()=>{
      getUser();
    },[])


    const handleForm=(event)=>{
      // console.log("file",event.target.files.length)
      setForm({
        ...getform,
        [event.target.name]:event.target.value
      })
    }
    // console.log("form" ,getform)
  

  return (
  <div>
    <Container className='mt-5 mb-5'>
        <Row className='justify-content-center '>
            <Col lg={8}>
            <h2 className='mb-4'>Email sending...</h2>
         <Form noValidate validated={validated} onSubmit={handleSubmit} encType='multipart/form-data'>
    <Row className="mb-3">
    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
        <Form.Label>To</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="to"
            aria-describedby="inputGroupPrepend"
            name='to'
            required
            onChange={handleForm}
            // value={username}
            />
          <Form.Control.Feedback type="invalid">
            Please choose the email.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="12" controlId="validationCustom03">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Subject" required
         name='subject'
        onChange={handleForm}
        // value={number}
         />
        <Form.Control.Feedback type="invalid">
          Please provide a valid number.
        </Form.Control.Feedback>
      </Form.Group>
    
    </Row>
    <Form.Group as={Col} md="12" controlId="validationCustom01">
        <Form.Label>Body</Form.Label>
        <Form.Control
          required
          as="textarea"
          style={{ height: '100px' }}
          name='body'
          placeholder="body"
          onChange={handleForm}
        //   value={name}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              // required
              name="file"
              id="files"
              multiple
              onChange={handleForm}
            />
          </Form.Group>
     
    <Row>
    
    </Row>
    <Form.Group className="mb-3">
      <Form.Check
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
        feedbackType="invalid"
      />
    </Form.Group>
    <Button type="submit">Submit form</Button>
        </Form>
        </Col>
        </Row>
    </Container>
  </div>
  )
}

export default Subscription;