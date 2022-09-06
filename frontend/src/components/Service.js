import React from 'react'
import { Link } from 'react-router-dom'

const Service = (props) => {
  return (
    <div className='col-12 col-md-4 py-2'>
        <div className="card m-auto" style={{width: 18+"rem"}}>
            <img src={props.imgsrc} className="card-img-top service-img" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <Link to="/" className="btn btn-dark">Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Service