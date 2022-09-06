import React from 'react'
import logo from '../images/logo.png'

const About = () => {
  return (
    <div className="container my-4">
    <div className="row featurette d-flex justify-content-center
        align-items-center">
        <div className="col-md-5 order-md-1" id="aboutimg">
            <img className="bd-placeholder-img bd-placeholder-img-lg
                featurette-image img-fluid" src={logo} width={400}
                height={400} alt=""/>
        </div>
        <div className="col-md-6 order-md-2">
            <h2 className="featurette-heading">About Us</h2>
            <hr/>
            <ul>
                <li>We are a group of developers who love web technologies.</li>
                <li>We can make any web product of your need at affordable prices.</li>
                <li>We have currently 40+ happy clients.</li>
                <li>We occasionally conduct workshops and giveaways.</li>
                <li>To know more about us, connect with us on social media.</li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default About