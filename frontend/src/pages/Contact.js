import {React, useState} from 'react'

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })
 
    const handleClick = () =>{
        alert(`Your name is ${data.name} and email is ${data.email}. Click Ok to confirm.`);
        alert(`Thanks for contacting us. We will contact you shortly.`);
        setData({
            name: "",
            email: "",
            message: ""
        })
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setData((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        })
    }
  return (
    <div className='container pt-2'>
    <div className="mb-3">
        <label htmlFor="name" className="form-label">Your Name</label>
        <input type="text" onChange={handleChange} className="form-control" id="name" name='name' value={data.name} aria-describedby=""/>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" onChange={handleChange} className="form-control" name="email" id="exampleInputEmail1" value={data.email} aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
        <label htmlFor="message" className="form-label">Your Message</label>
        <textarea onChange={handleChange} rows={5} className="form-control" name="message" id="message" value={data.message}></textarea>
    </div>
    <button type="submit" onClick={handleClick} className="btn btn-dark">Submit</button>
    </div>
  )
}

export default Contact