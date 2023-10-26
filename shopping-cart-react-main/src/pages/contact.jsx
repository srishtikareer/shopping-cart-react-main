import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';

const formStyles = {
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const headingStyles = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const inputStyles = {
  marginBottom: '20px',
};

function Contact() {
  return (
    <form id='form' className='text-center' style={formStyles}>
      <h2 style={headingStyles}>Contact us</h2>

      <MDBInput label='Name' v-model='name' style={inputStyles} />

      <MDBInput type='email' label='Email address' v-model='email' style={inputStyles} />

      <MDBInput label='Subject' v-model='subject' style={inputStyles} />

      <MDBTextArea style={inputStyles} label='Message' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me a copy' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
  );
}

export default Contact;
