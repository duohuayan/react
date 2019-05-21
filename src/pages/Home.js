import React,{Component} from "react";
import Swiper from "../components/Swiper";
import axios from 'axios';

class Home extends Component {
    state={
        banners:[],
        auth:[]
    }
  render() {
      let {auth} = this.state.auth
    return(
      <div className="Home">    
       
        <Swiper {...this.props} banners={this.state.banners} dataName="banner"/>
        <div className="category segments">
            <div className="container">
                <div className="section-title">
                    <h3>Category
                        <a href="category.html">See All <i className="fa fa-angle-right"></i></a>
                    </h3>
                </div>
                <div className="category-show owl-carousel owl-theme">
                    <a href="category-details.html">
                        <div className="content c-first">
                            <div className="mask"></div>
                            <h4>Food</h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="menu segments bg-second">
            <div className="container">
                <div className="section-title">
                    <h3>Menu</h3>
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
                {auth.map(item => (
                    <div className="row" 
                    key={item.id}
                   // onClick={()=>{this.toDetail(item.id)}}
                    >
                        <div className="col s6">
                            <a href="menu-details.html">
                                <div className="content">
                                    <img src="/images/food1.jpg" alt="menu" />
                                    <div className="text">
                                        <h6>{item.title}</h6>
                                        <p className={item.price}>$</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    ))}
                    <div className="row">
                        <div className="col s6">
                            <a href="menu-details.html">
                                <div className="content">
                                    <img src="/images/food3.jpg" alt="menu" />
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
                                    <img src="/images/food4.jpg" alt="menu" />
                                    <div className="text">
                                        <h6>Meat Salad</h6>
                                        <p className="price">$22</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>                                
            </div>
        </div>
        <div className="testimonial segments">
            <div className="container">
                <div className="testimonial-show owl-carousel owl-theme">
                    <div className="content">
                        <img src="/images/testimonial1.png" alt="testimonial" />
                        <ul>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>
                        <h5>Samuel</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut non nisi sapiente vel hic esse! Dignissimos voluptate, dolorum nesciunt. Beatae.</p>
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
    )
}
    async componentDidMount(){
        let resHome = await axios({url:'/mock/banner',params:{_limit:10}});
        this.setState({auth:resHome.data.page_data})
        let resBanner = await axios({url:'/mock/banner',params:{_limit:3}});
        this.setState({banners:resBanner.data.page_data})
    }
}

export default Home;