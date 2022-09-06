import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminLeftMenu from './AdminLeftMenu'

const AddTest = () => {
  return (
    <div class="container-fluid">
        <div class="row test-section">
            <AdminLeftMenu/>
            <div class="col-12 col-md-9 test-section d-flex flex-column justify-content-center align-items-center py-5">
            <form>
                <div className="d-flex align-items-center">
                <div class="mb-3 me-3 w-25">
                    <label for="subjectInput" class="form-label">Test Name</label>
                    <input type="text" class="form-control" id="subjectInput" name='subjectInput'/>
                    <label for="subjectInput" class="form-label">Test Duration in Minutes</label>
                    <input type="text" class="form-control" id="subjectInput" name='subjectInput'/>
                    <label for="subjectInput" class="form-label">No. Of Questions</label>
                    <input type="text" class="form-control" id="subjectInput" name='subjectInput'/>
                </div>
                <div className="w-75 d-flex">
                    <div className="shadow p-2 rounded w-50">
                        <h6 className='mb-0'>Choose Class</h6>
                        <input type="checkbox" class="" name=''/>
                        <label for="" class="form-label ms-1">English</label>
                    </div>
                    <div className="shadow p-2 rounded w-50 ms-2">
                        <h6 className='mb-0'>Choose Subject</h6>
                        <input type="checkbox" class="" name=''/>
                        <label for="" class="form-label ms-1">English</label>
                    </div>
                </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className=""> 
                        <label for="subjectInput" class="form-label">No. Of Sub1 Questions</label>
                        <input type="text" class="form-control" id="subjectInput" name='subjectInput'/>
                    </div>    
                    <div className=""> 
                        <label for="subjectInput" class="form-label">No. Of Sub1 Questions</label>
                        <input type="text" class="form-control" id="subjectInput" name='subjectInput'/>
                    </div>    
                    <div className=""> 
                        <label for="subjectInput" class="form-label">No. Of Sub1 Questions</label>
                        <input type="text" class="form-control" id="subjectInput" name='subjectInput'/>
                    </div>    
                </div>
                <button type="submit" class="btn btn-sm btn-primary">Add</button>
            </form>             
            </div>  
        </div>
    </div>
  )
}

export default AddTest