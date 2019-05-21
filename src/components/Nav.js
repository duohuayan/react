import React,{Component} from 'react';

class Nav extends Component{
    render(){
        return(
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
        )
    }
}

export default Nav;







