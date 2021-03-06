import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    style(){
        return {
            body:{
                overflow:'auto'
            }
        }
    }
    render() {
        return (
        <React.Fragment>
        {this.style}
            <header class="main_menu home_menu">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <a class="navbar-brand" href="/no-link"> 
                                    <img alt="example" src={require("assets/images/whitelogo-sm.png")}/>
                                </a>    
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="menu_icon"><i class="fas fa-bars"></i></span>
                                </button>
        
                                <div class="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#about">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <Link  class="nav-link" to="features">
                                                feature
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link  class="nav-link" to="signin">
                                                Sign In
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link"  to="signup">
                                                Sign Up
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <section class="banner_part">
                <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="banner_text">
                            <div class="banner_text_iner">
                                <h1>Drive More Customers
                                    Through Digital</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam.</p>
                                <a href="/no-link" class="btn_2 banner_btn_1">Get Started </a>
                                <a href="/no-link" class="btn_2 banner_btn_2">Sign up for free </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="banner_img d-none d-lg-block">
                            <img src="img/banner_img.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section class="feature_part padding_top">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-lg-6 ">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-sm-6">
                                    <div class="single_feature">
                                        <div class="single_feature_part">
                                            <img src="img/icon/feature_icon_1.png" alt="" />
                                            <h4>A Volunteer</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6">
                                    <div class="single_feature">
                                        <div class="single_feature_part">
                                            <img src="img/icon/feature_icon_2.png" alt="" />
                                            <h4>A Volunteer</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                                        </div>
                                    </div>
                                    <div class="single_feature">
                                        <div class="single_feature_part single_feature_part_2">
                                            <img src="img/icon/feature_icon_3.png" alt="" />
                                            <h4>A Volunteer</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="feature_part_text">
                                <h2>featured</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                    ultrices gravida Risus com odo viverra maecenas accumsan lacus vel facilisis
                                    accumsan.</p>
                                <div class="row">
                                    <div class="col-sm-6 col-md-4 col-lg-5">
                                        <div class="feature_part_text_iner">
                                            <h4>50k</h4>
                                            <p>Total Volunteer</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4 col-lg-5">
                                        <div class="feature_part_text_iner">
                                            <h4>100k</h4>
                                            <p>Successed Mission</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="/no-link" class="btn_4">learn more <img src="img/icon/right-arrow.svg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <img src="img/animate_icon/Shape-1.png" alt="" class="feature_icon_1"/>
                <img src="img/animate_icon/Shape-14.png" alt="" class="feature_icon_2"/>
                <img src="img/animate_icon/Shape.png" alt="" class="feature_icon_3"/>
                <img src="img/animate_icon/shape-3.png" alt="" class="feature_icon_4"/>
            </section>
            <section class="about_us section_padding">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-md-6 col-lg-5">
                            <div class="about_us_text">
                                <h2>Right people at the
                                    Right time.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim</p>
                                <a href="/no-link" class="btn_1">get started</a>
                                <a href="/no-link" class="btn_2">sing up free</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <div class="learning_img">
                                <img src="img/about_img.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="img/left_sharp.png" alt="" class="left_shape_1"/>
                <img src="img/about_shape.png" alt="" class="about_shape_1"/>
                <img src="img/animate_icon/Shape-16.png" alt="" class="feature_icon_1"/>
                <img src="img/animate_icon/Shape-1.png" alt="" class="feature_icon_4"/>
            </section>
            <section class="use_sasu">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section_tittle text-center">
                                <h2>Who can use Sasu?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature">
                                <div class="single_feature_part">
                                    <img src="img/icon/feature_icon_1.png" alt=""/>
                                    <h4>A Volunteer</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature">
                                <div class="single_feature_part">
                                    <img src="img/icon/feature_icon_2.png" alt=""/>
                                    <h4>A Volunteer</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature">
                                <div class="single_feature_part">
                                    <img src="img/icon/feature_icon_3.png" alt=""/>
                                    <h4>A Volunteer</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="img/animate_icon/Shape-14.png" alt="" class="feature_icon_1"/>
                <img src="img/animate_icon/Shape-10.png" alt="" class="feature_icon_2"/>
                <img src="img/animate_icon/Shape.png" alt="" class="feature_icon_3"/>
                <img src="img/animate_icon/shape-13.png" alt="" class="feature_icon_4"/>
            </section>
            <section class="about_us right_time section_padding">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-md-6 col-lg-6">
                            <div class="learning_img">
                                <img src="img/about_img_1.png" alt="" />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-5">
                            <div class="about_us_text">
                                <h2>Easy to Use 
                                    Mobile Application</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim</p>
                                <a href="/no-link" class="btn_1">get started</a>
                                <a href="/no-link" class="btn_2">sing up free</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="img/about_shape.png" alt="" class="about_shape_1"/>
                <img src="img/animate_icon/Shape-1.png" alt="" class="feature_icon_1"/>
                <img src="img/animate_icon/shape.png" alt="" class="feature_icon_4"/>
            </section>
            <section class="pricing_part mb_130 home_page_pricing">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section_tittle text-center">
                                <h2>Simple Pricing</h2>
                                <p>Life firmament under them evening make after called dont
                                    saying likeness isn't wherein also forth she'd air two without</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_pricing_part">
                                <img src="img/icon/feature_icon_1.png" alt=""/>
                                <p>business</p>
                                <h3>$50.00 <span>/ mo</span></h3>
                                <ul>
                                    <li>2GB Bandwidth</li>
                                    <li>Two Account</li>
                                    <li>15GB Storage</li>
                                    <li>Sale After Service</li>
                                    <li>3 Host Domain</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <a href="/no-link" class="btn_1">Choose Plane</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_pricing_part">
                                <img src="img/icon/feature_icon_2.png" alt=""/>
                                <p>business</p>
                                <h3>$60.00 <span>/ mo</span></h3>
                                <ul>
                                    <li>2GB Bandwidth</li>
                                    <li>Two Account</li>
                                    <li>15GB Storage</li>
                                    <li>Sale After Service</li>
                                    <li>3 Host Domain</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <a href="/no-link" class="btn_1">Choose Plane</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_pricing_part">
                                <img src="img/icon/feature_icon_3.png" alt=""/>
                                <p>business</p>
                                <h3>$80.00 <span>/ mo</span></h3>
                                <ul>
                                    <li>2GB Bandwidth</li>
                                    <li>Two Account</li>
                                    <li>15GB Storage</li>
                                    <li>Sale After Service</li>
                                    <li>3 Host Domain</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <a href="/no-link" class="btn_1">Choose Plane</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="img/left_sharp.png" alt="" class="left_shape_1"/>
                <img src="img/animate_icon/Shape-1.png" alt="" class="feature_icon_1"/>
                <img src="img/animate_icon/shape.png" alt="" class="feature_icon_4"/>
            </section>
            <section class="cta_part section_padding">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <div class="cta_text text-center">
                                <h2>Very useful Friendly</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo</p>
                                <a href="/no-link" class="btn_2 banner_btn_1">Get Started </a>
                                <a href="/no-link" class="btn_2 banner_btn_2">Sign up for free </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <footer class="footer_part">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="single_footer_part">
                                <a href="index.html" class="footer_logo_iner"> <img src="img/footer_logo.png" alt="#" /> </a>
                                <h4>About Us</h4>
                                <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="single_footer_part">
                                <h4>Contact Info</h4>
                                <p>Address : Your address goes
                                    here, your demo address.
                                    Bsngladesh.</p>
                                <p>Phone : +8880 44338899</p>
                                <p>Email : info@colorlib.com</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="single_footer_part">
                                <h4>Important Link</h4>
                                <ul class="list-unstyled">
                                    <li><a href="/no-link"> WHMCS-bridge</a></li>
                                    <li><a href="/no-link">Search Domain</a></li>
                                    <li><a href="/no-link">My Account</a></li>
                                    <li><a href="/no-link">Shopping Cart</a></li>
                                    <li><a href="/no-link">Our Shop</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="single_footer_part">
                                <h4>Newsletter</h4>
                                <p>Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days
                                    open
                                </p>
                                <div id="mc_embed_signup">
                                    <form target="_blank"
                                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                        method="get" class="subscribe_form relative mail_part">
                                        <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                            class="placeholder hide-on-focus" onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = ' Email Address '" />
                                        <button type="submit" name="submit" id="newsletter-submit"
                                            class="email_icon newsletter-submit button-contactForm"><i
                                                class="far fa-paper-plane"></i></button>
                                        <div class="mt-10 info"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="copyright_text">
                                
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="footer_icon social_icon">
                                <ul class="list-unstyled">
                                    <li><a href="/no-link" class="single_social_icon"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="/no-link" class="single_social_icon"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="/no-link" class="single_social_icon"><i class="fas fa-globe"></i></a></li>
                                    <li><a href="/no-link" class="single_social_icon"><i class="fab fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
        ) 
    }
}
