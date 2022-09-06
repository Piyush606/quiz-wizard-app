import React from 'react'
import { Link } from 'react-router-dom'

const AdminLeftMenu = () => {
  return (
    <div class="col-12 col-md-3 test-section-menu d-flex flex-column justify-content-center align-items-center">
        <Link to="/admin/add-class"><button className='btn btn-outline-dark my-2'>
            Add Class
        </button></Link>              
        <Link to="/admin/add-subject"><button className='btn btn-outline-dark my-2'>
            Add Subject
        </button></Link>              
        <Link to="/admin/add-test"><button className='btn btn-outline-dark my-2'>
            Add Test
        </button></Link>              
        <Link to="/admin/add-chapter"><button className='btn btn-outline-dark my-2'>
            Add Chapter
        </button></Link>              
        <Link to="/admin/add-question"><button className='btn btn-outline-dark my-2'>
            Add Questions
        </button></Link>              
    </div>
  )
}

export default AdminLeftMenu