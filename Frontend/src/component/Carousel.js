import React, { Component } from 'react';
import './../style/Carousel.css';
import cisoka from './../image/cisoka.jpg';
import surosowan from './../image/surosowan.jpg';
import debus from './../image/debus.jpg';
import vihara from './../image/vihara.jpg';

class Carousel extends Component {
    render() {
        return (
            <div className="carousel slide" id="iniCarousel" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#iniCarousel" data-slide-to="0" class="active"></li>&nbsp;
                    <li data-target="#iniCarousel" data-slide-to="1"> </li>&nbsp;
                    <li data-target="#iniCarousel" data-slide-to="2"> </li>&nbsp;
                    <li data-target="#iniCarousel" data-slide-to="3"> </li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <img src={cisoka} alt="x"       className="img-responsive center-block" style={{height:"200px",width:"400px",borderRadius:20}}/>
                        <div className="carousel-caption"><b>Telaga Biru Cisoka</b>
                        </div>
                    </div>
                    <div className="item">
                        <img src={surosowan} alt="x"    className="img-responsive center-block"style={{height:"200px",width:"400px",borderRadius:20}}/>
                        <div className="carousel-caption"><b>Benteng Surosowan</b>
                        </div>
                    </div>
                    <div className="item">
                        <img src={debus} alt="x"        className="img-responsive center-block"style={{height:"200px",width:"400px",borderRadius:20}}/>
                        <div className="carousel-caption"><b>Kesenian Debus</b>
                        </div>
                    </div>
                    <div className="item">
                        <img src={vihara} alt="x" className="img-responsive center-block"style={{height:"200px",width:"400px",borderRadius:20}}/>
                        <div className="carousel-caption"><b>Vihara Avalokitesvara</b>
                        </div>
                    </div>
                </div>
                {/* <a href="#iniCarousel" data-slide="next" >
                    <span className="glyphicon glyphicon-backward" style={{paddingRight:20,fontSize:20,color:'skyblue'}}></span>&nbsp;
                </a>
                <a href="#iniCarousel" data-slide="prev"  >
                    <span className="glyphicon glyphicon-forward"  style={{paddingleft:20,fontSize:20,color:'skyblue'}}></span>
                </a> */}
            </div>
        );
    };
}
export default Carousel ;