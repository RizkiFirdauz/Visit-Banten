import React, { Component } from 'react';
import './../style/Contact.css';
import Zoom from 'react-reveal';

class Contact extends Component {
    render() {
        return (
            <Zoom top>
            <div className="Contact" id="contact">
                    <div className="container2"><br/>
                    <p8><center>Contact us</center></p8><br/>
                        <div className="col-lg-4 col-xs-12 container">
                            <i className="fas fa-map-marker-alt" style={{fontSize:"80px"}}></i><br/><br/>
                            <center><b>ADDRESS</b></center><br/>
                            <center>Bojonegara Serang-Banten 42454</center>
                        </div>
                        <div className="col-lg-4 col-xs-12 container">
                            <i className="fas fa-phone" style={{fontSize:"80px"}}></i><br/><br/>
                            <center><b>PHONE</b></center><br/>
                            <center>+62896 9802 0118 </center>
                        </div>
                        <div className="col-lg-4 col-xs-12 container">
                            <i className="far fa-envelope" style={{fontSize:"80px"}}></i><br/><br/>
                            <center><b>EMAIL</b></center><br/>
                            <center>banten@visit.com</center>
                        </div>
                    </div>
            </div>
            </Zoom>
        );
    }
}
export default Contact ;