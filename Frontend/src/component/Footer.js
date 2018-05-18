import React, { Component } from 'react';
import './../style/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <nav className="navbar navbar-inverse navbar-fixed-bottom" style={{background:'transparent'}}>
                    <h4>Banten Wisata - Copyright &copy;2018</h4>
                </nav>
            </div>
        );
    }
}
export default Footer ;