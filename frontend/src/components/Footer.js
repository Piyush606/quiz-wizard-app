import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="p-2 bg-dark">
    <div className="text-center my-2">
        <a className="text-white mx-2" href="#"><AiFillFacebook/></a>
        <a className="text-white mx-2" href="#"><AiFillInstagram/></a>
        <a className="text-white mx-2" href="#"><AiFillLinkedin/></a>
        <a className="text-white mx-2" href="#"><AiFillYoutube/></a>
        <a className="text-white mx-2" href="#"><AiFillTwitterCircle/></a>
    </div>
    <div className="text-center mb-2">
        <p className="text-white mb-0">WebNinjas © 2022, All rights reserved.</p>
    </div>
</footer>
  )
}

export default Footer