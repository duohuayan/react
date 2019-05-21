import React,{Component} from "react";
import Nav from '../components/Nav'
// import axios from 'axios';
// import querystring from 'query-string'

class MenuDetail extends Component {
    state={
    data:{}
    }
    render() {
    // let data = this.state.data;
    return (
        <div className="MenuDetail">
            <Nav/>
            <div className="menu-details segments-page">
                <div className="container">
                    <div id="tabs1" className="tabbb">
                        <div className="row">
                            <div className="col s12">
                                <div className="content">
                                    <img src="images/menu-details1.jpg" alt="menu" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tabs2" className="tabbb">
                        <div className="row">
                            <div className="col s12">
                                <div className="content">
                                    <img src="images/menu-details2.jpg" alt="menu" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tabs3" className="tabbb">
                        <div className="row">
                            <div className="col s12">
                                <div className="content">
                                    <img src="images/menu-details3.jpg" alt="menu" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-mb">
                        <div className="col s12">
                            <ul className="tabs">
                                <li className="tab col s4">
                                    <a className="active" href="#tabs1">
                                        <img src="images/menu-details1.jpg" alt="" />
                                    </a>
                                </li>
                                <li className="tab col s4">
                                    <a className="active" href="#tabs2">
                                        <img src="images/menu-details2.jpg" alt="" />
                                    </a>
                                </li>
                                <li className="tab col s4">
                                    <a className="active" href="#tabs3">
                                        <img src="images/menu-details3.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-desc">
                        <span>Food</span>
                        <h5>Meat With Spicy Salty Sauce</h5>
                        <h4>$23</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ducimus, dolor aperiam impedit, sapiente natus magni eaque, optio quae aliquid saepe.</p>
                        <button className="button">Add to Cart</button>
                    </div>
                    <div className="review">
                        <h5>Review</h5>
                        <div className="comment-people">
                            <div className="content">
                                <div className="image">
                                    <img src="images/comment1.png" alt="" />
                                </div>
                                <div className="text">
                                    <h6>John Andy</h6>
                                    <p className="date">March 23, 2018</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, non.</p>
                                </div>
                            </div>
                            <div className="content reply">
                                <div className="image">
                                    <img src="images/comment2.png" alt="" />
                                </div>
                                <div className="text">
                                    <h6>Franky</h6>
                                    <p className="date">March 24, 2018</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, non.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-add">
                        <h5>Leave Your Reply</h5>
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <textarea cols="30" rows="10" placeholder="Message"></textarea>
                            <button className="button">Submit</button>
                        </form>
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

export default MenuDetail;