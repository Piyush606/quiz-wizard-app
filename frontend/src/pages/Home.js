import React from 'react'
import logo from '../images/logo.png'
import {AiFillYoutube, AiOutlineFilePdf} from 'react-icons/ai'
import {MdQuiz} from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container my-4">
    <div className="row featurette d-flex justify-content-center
        align-items-center mb-5">
        <div className="col-md-6">
            <h2 className="featurette-heading">WebNinjas</h2>
            <p className="lead">Creating something special everyday.</p>
        </div>
        <div className="col-md-5" id="aboutimg">
            <img className="bd-placeholder-img bd-placeholder-img-lg
                featurette-image img-fluid" src={logo} width={400}
                height={400} alt=""/>
        </div>
    </div>
    <div className='row mx-auto my-5'>
        <div className="col-12 col-md-4">
            <div className="card mx-auto shadow">
                <NavLink to="/pdfs"><div class="card-body text-center">
                <a className="text-dark mx-2" href="#"><AiOutlineFilePdf size={150}/>
                <h5 className="card-title">PDF Notes</h5>
                </a>
                </div></NavLink>
            </div>
        </div>
        <div className="col-12 col-md-4">
            <div className="card mx-auto shadow">
                <NavLink to="/videos"><div class="card-body text-center">
                <a className="text-dark mx-2" href="#"><AiFillYoutube size={150}/>
                <h5 className="card-title">Video Lectures</h5>
                </a>
                </div></NavLink>
            </div>
        </div>
        <div className="col-12 col-md-4">
            <div className="card mx-auto shadow">
                <NavLink to="/subjects"><div class="card-body text-center">
                <a className="text-dark mx-2" href="#"><MdQuiz size={150}/>
                <h5 className="card-title">Online Tests</h5>
                </a>
                </div></NavLink>
            </div>
        </div>
    </div>
</div>
  )
}

export default Home