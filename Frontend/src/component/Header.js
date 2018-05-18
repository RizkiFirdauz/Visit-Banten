import React, { Component } from 'react';
import './../style/Header.css';
import a from './../image/badakbanten.png';
import { Link } from 'react-router-dom';
import { providergoogle, providerfacebook, auth } from '../fire';

class Header extends Component {
    constructor(){
        super();
        this.state= {user:null}
      }
      async logingoogle() {
        const result = await auth().signInWithPopup(providergoogle);
        this.setState({user: result.user});
      }
      async loginfacebook() {
        const result = await auth().signInWithPopup(providerfacebook);
        this.setState({user: result.user});
      }
      async logout(){
        await auth().signOut()
        this.setState({user: null})
      }
    render() {
        return (
        <div className="Header">
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <div id="logo" className="pull-left">
                    <Link to="/" style={{textDecoration:"none"}} className="scrollto">VisitBanten</Link>
                    </div>
                    <button className="navbar-toggle collapsed"
                        data-toggle="collapse" data-target="#rhyez">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse"
                    id="rhyez">
                <ul className="nav navbar-nav" style={{paddingLeft:120}}>
                        <li><Link to ="/"  >Home  </Link></li>
                        <li><Link to="/Database">Admin  </Link></li>
                        <li><Link to="/History" >History</Link></li>
                        <li><Link to="/Contact" >Contact us</Link></li>
                </ul>
                <div id="avatars" className="avatar" style={{paddingTop:"10px"}}>
                <img src={a} alt="x" style={{height:"40px",width:"50px",marginLeft:"50px"}}/>
                    {this.state.user ? `Welcome,
                    ${this.state.user.displayName}.` : 'Please, Login guys! '}&nbsp;&nbsp;&nbsp;
                    <Link to ="/" data-toggle="tooltip" data-placement="down" title="Login with Google">
                        <i className="fab fa-google"        onClick={this.logingoogle.bind(this)}   style={{color:"grey"}}></i></Link>&nbsp;&nbsp;
                    <Link to ="/" data-toggle="tooltip" data-placement="down" title="Login with Facebook">
                        <i className="fab fa-facebook"      onClick={this.loginfacebook.bind(this)} style={{color:"grey"}}></i></Link>&nbsp;&nbsp;
                    <Link to ="/" data-toggle="tooltip" data-placement="down" title="Logout">
                        <i className="fas fa-window-close"  onClick={this.logout.bind(this)}        style={{color:"grey"}}></i></Link>
                </div>
                </div>
            </div>
        </nav>
    </div>
        );
    }
}
export default Header ;