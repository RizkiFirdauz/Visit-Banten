import React, { Component } from 'react';
import './../style/Front.css';
import { Link }     from 'react-router-dom';
import Carousel     from './Carousel';
import sawarna      from './../image/sawarna.jpg';
import badak        from './../image/badak.jpg';
import kaibon       from './../image/kaibon.jpg';
import baduy        from './../image/baduy.jpeg';
import golok        from './../image/golok.jpg';
import pecakbandeng from './../image/pecakbandeng.jpg';
import peta         from './../image/peta.jpg';
import Zoom         from 'react-reveal';
import Rotate       from 'react-reveal';

class Front extends Component {
    render() {
        return (
            <div className="container-fluid1">
                <div className="col-lg-7 container-fluid3">
                    <Zoom top cascade>
                    <center>
                        <h2>Masih bingung pengen liburan kemana . . . ? ?</h2><br/>
                        <Link to ="/Pencarian"><button className="btn btn-primary"><b>Visit Now</b></button></Link>
                    </center>
                    </Zoom>
                    <Zoom bottom cascade>
                    <h3 style={{textAlign:"right",paddingLeft:200}}>“It is good to have an end to journey toward but it is the journey that matters, in the end.” – Ernest Hemingway</h3>         
                    </Zoom>
                    <div className="sosmed">              
                        <a href="https://www.facebook.com/banten.id">
                            <i className="fab fa-facebook-square" style={{fontSize:"20px",paddingBottom:"10px"}}></i></a><br/>
                        <a href="https://www.instagram.com/explore/locations/750571182/dinas-budaya-dan-pariwisata-provinsi-banten/">
                            <i className="fab fa-instagram"       style={{fontSize:"20px",paddingBottom:"10px"}}></i></a><br/>
                        <a href="https://twitter.com/visitbanten_id">
                            <i className="fab fa-twitter"         style={{fontSize:"20px"}}></i></a>
                    </div>
                </div>
                <div className="col-lg-1 container-fluid6">
                    <Zoom left>
                    <center>
                        <Link to ="/Sawarna"                ><img src={sawarna}      alt="x" className="img-responsive" style={{height:"75px",width:"75px",marginBottom:15,borderRadius:20,marginLeft:"8px"}}></img></Link>
                        <Link to ="/Tamannasionalujungkulon"><img src={badak}        alt="x" className="img-responsive" style={{height:"75px",width:"75px",marginBottom:15,borderRadius:20,marginLeft:"8px"}}></img></Link>
                        <Link to ="/Keratonkaibon"          ><img src={kaibon}       alt="x" className="img-responsive" style={{height:"75px",width:"75px",marginBottom:15,borderRadius:20,marginLeft:"8px"}}></img></Link>
                        <Link to ="/Kampungbaduy"           ><img src={baduy}        alt="x" className="img-responsive" style={{height:"75px",width:"75px",marginBottom:15,borderRadius:20,marginLeft:"8px"}}></img></Link>
                        <Link to ="/Golokciomas"            ><img src={golok}        alt="x" className="img-responsive" style={{height:"75px",width:"75px",marginBottom:15,borderRadius:20,marginLeft:"8px"}}></img></Link>
                        <Link to ="/Pecakbandeng"           ><img src={pecakbandeng} alt="x" className="img-responsive" style={{height:"75px",width:"75px",borderRadius:20,marginLeft:"8px"}}></img></Link>                      
                    </center>
                    </Zoom>
                </div>
                <div className="col-lg-4 container-fluid2">
                    <div className="row">
                    <div className="col-lg-12 fluid4">
                    <Zoom top>
                        <img src={peta} alt="x" className="img-responsive center-block" style={{height:"320px",width:"400px",borderRadius:20}}/>
                    </Zoom>
                    </div>
                    <div className="col-lg-12 fluid5">
                    <Zoom left>
                        <Carousel/>
                    </Zoom>
                    </div>
                    </div>
                </div>
            </div>
)}};
export default Front ;