import React,{Component} from "react";
// import '../assets/css/Column.css'
// import Cell from "../components/Cell";
// import axios from "axios";

class Column extends Component {
    state={
    cells:[]
    };
    render() {
    return (
        <div className="Column">
        <div className="sidebar-panel">
            <ul id="slide-out" className="collapsible sidenav side-left side-nav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="images/bg-user.jpg" alt="" />
                        </div>
                        <h2><span>A</span>aem</h2>
                        <p>Cafe & Restaurant</p>
                    </div>
                </li>
                <li><a href="#!"><i className="fa fa-home"></i>Home</a></li>
                <li>
                    <div className="collapsible-header">
                        <i className="fa fa-list"></i>Menu<span><i className="fa fa-caret-right right"></i></span>
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li><a href="menu-list.html">Menu</a></li>
                            <li><a href="menu-details.html">Menu Details</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="fa fa-user-circle-o"></i>Chef<span><i className="fa fa-caret-right right"></i></span>
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li><a href="chef.html">Chef</a></li>
                            <li><a href="chef-details.html">Chef Details</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="fa fa-user"></i>Profile<span><i className="fa fa-caret-right right"></i></span>
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="edit-profile.html">Edit Profile</a></li>
                            <li><a href="forgot-password.html">Forgot Password</a></li>
                            <li><a href="reset-password.html">Reset Password</a></li>
                            <li><a href="login.html">Sign In</a></li>
                            <li><a href="#!.html">Logout</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="fa fa-file"></i>Pages<span><i className="fa fa-caret-right right"></i></span>
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li><a href="about.html">About</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="testimonial.html">Testimonial</a></li>
                            <li><a href="pricing-table.html">Pricing Table</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="fa fa-tags"></i>Category<span><i className="fa fa-caret-right right"></i></span>
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li><a href="category.html">Category</a></li>
                            <li><a href="category-details.html">Category Details</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="fa fa-shopping-cart"></i>Shop<span><i className="fa fa-caret-right right"></i></span>
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li><a href="category.html">Category</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="done-process.html">Done</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="fa fa-rss"></i>Blog<span><i className="fa fa-caret-right right"></i></span>
                    </div>
                    <div className="collapsible-body">
                        <ul>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-single.html">Blog Single</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="reservation.html"><i className="fa fa-book"></i>Reservation</a></li>
                <li><a href="open-hours.html"><i className="fa fa-clock-o"></i>Open Hours</a></li>
                <li><a href="contact.html"><i className="fa fa-envelope"></i>Contact</a></li>
                <li><a href="login.html"><i className="fa fa-sign-in"></i>Login</a></li>
                <li><a href="register.html"><i className="fa fa-user-plus"></i>Register</a></li>
                <li><a href="#!"><i className="fa fa-sign-out"></i>Logout</a></li>
            </ul>
        </div>
        <div className="menu menu-list segments-page">
            <div className="container">
                <div className="wrap-title">
                    <h3>Menu List</h3>
                </div>
                <div className="row no-mb">
                    <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s3"><a className="active" href="#tabs1">Food</a></li>
                            <li className="tab col s3"><a href="#tabs2">Drink</a></li>
                            <li className="tab col s3"><a href="#tabs3">Snack</a></li>
                            <li className="tab col s3"><a href="#tabs4">Dessert</a></li>
                        </ul>
                    </div>
                </div>
                <div id="tabs1">
                    <div className="row">
                        <div className="col s6">
                            <a href="menu-details.html">
                                <div className="content">
                                    <img src="images/food1.jpg" alt="menu" />
                                    <div className="text">
                                    <h6>Meat Mix Foliage</h6>
                                        <p className="price">$32</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col s6">
                            <a href="menu-details.html">
                                <div className="content">
                                    <img src="images/food2.jpg" alt="menu" />
                                    <div className="text">
                                        <h6>Delicious Fungus</h6>
                                        <p className="price">$15</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <a href="menu-details.html">
                                <div className="content">
                                    <img src="images/food3.jpg" alt="menu" />
                                    <div className="text">
                                        <h6>Meat Sauce</h6>
                                        <p className="price">$10</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col s6">
                            <a href="menu-details.html">
                                <div className="content">
                                    <img src="images/food4.jpg" alt="menu" />
                                    <div className="text">
                                        <h6>Meat Salad</h6>
                                        <p className="price">$22</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <a href="menu-details.html">
                                <div className="content">
                                    <img src="images/food5.jpg" alt="menu" />
                                    <div className="text">
                                        <h6>Sweet Fried Rice</h6>
                                        <p className="price">$21</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col s6">
                            <a href="menu-details.html">
                                <div className="content">
                                    <img src="images/food6.jpg" alt="menu" />
                                    <div className="text">
                                        <h6>Meat Thick Gravy</h6>
                                        <p className="price">$14</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>                       
            </div>
        </div>
        <footer>
            <div className="container">
                <div className="desc">
                    <p>58 Poland Street, London</p>
                    <span>United Kingdom</span>
                </div>
                <ul>
                    <li><a href=""><i className="fa fa-facebook"></i></a></li>
                    <li><a href=""><i className="fa fa-twitter"></i></a></li>
                    <li><a href=""><i className="fa fa-google"></i></a></li>
                    <li><a href=""><i className="fa fa-instagram"></i></a></li>
                </ul>
                <p>Copyright © All Right <a href="http://www.bootstrapmb.com">Reserved</a></p>
            </div>
        </footer>
    </div>
    );
    }
}

export default Column;