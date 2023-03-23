
import './Contact.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';    
import {FaLocationArrow, FaPhoneAlt} from 'react-icons/fa';
import {RiTimer2Line} from 'react-icons/ri';
import MenuButton from './MenuButton';

export default function Contact() {

  return (
  <div id='backgroundContact'>
  <MenuButton/>
<div id="gridContact">


    <div id = 'connectText'>
      <h2> Connect with us </h2>
    </div>
    <div  id='welcomePhoto'>  </div>
    <div id='contentBackground'></div>
    <div id='contentAbout'>

      <div  id='address'>
        <h3>Address</h3>
        <a className="styleLink" target="_blank" href='https://www.google.com/maps/place/Pho+Rang+Dong/@43.6775717,-79.4462333,17z/data=!3m1!4b1!4m5!3m4!1s0x882b3473968dcfa7:0x8a54f6d0c63c9b31!8m2!3d43.6775765!4d-79.4440485'>
          <FaLocationArrow id='addressIcon' /> 1193 St Clair Ave W, Toronto, ON, M6H 3M9 Canada</a>
      </div>

      <hr className='line'></hr>

      <div id='phone'>
        <h3 > Phone</h3>
        <a href='href="tel:4168484775":' className='styleLink'><FaPhoneAlt id='phoneIcon'/> (416) 848-4775</a>
      </div>

      <hr className='line'></hr>

      <div id = 'hours'>
        <h3>Operating Hour <RiTimer2Line id ='hoursIcon'/></h3>
        <table id='tableAbout'>
          <tr>
            <td>Mon - Sat</td>
            <td>11am - 10pm</td>
            <td> &#40;Last call at 9pm&#41; </td>
          </tr>
          <tr>
            <td>Sun</td>
            <td>12pm - 9pm</td>
            <td>&#40;Last call at 8.30pm&#41;</td>
          </tr>
        </table>
      </div>

      <hr className='line'></hr>

      <h3>Inquiries</h3>
      <p > If you have any inquiries, please send us a message here!</p>
      <Form className="form">
          
          <Form.Control type="text" className="form-holder1" placeholder="Your email address" required/>
          <Form.Control type="text" className="form-holder2" placeholder="Message" required/>
          
      </Form>
      <Button id='button' variant="Primary" type="submit">Send</Button>
    </div>
    </div>
    </div>
  )
}


