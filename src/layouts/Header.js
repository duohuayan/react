import React,{Component} from "react";
// import style from  '../assets/css/Header.module.css'
// import { NavLink } from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-home">
        <div className="container">
            <div className="row">
                <div className="col s3">
                    <div className="content-left">
                        <a href="#slide-out" data-target="slide-out" className="sidenav-trigger"><i className="fa fa-bars"></i></a>
                        
                    </div>
                </div>
                <div className="col s6">
                    <div className="content-center">
                        <a href="index.html"><h1>Aaem</h1></a>
                    </div>
                </div>
                <div className="col s3">
                    <div className="content-right">
                        <a href="reservation.html"><i className="fa fa-clipboard"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Header;