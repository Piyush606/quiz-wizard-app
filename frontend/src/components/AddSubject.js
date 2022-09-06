import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminLeftMenu from './AdminLeftMenu'

const AddSubject = () => {
  return (
    <div class="container-fluid">
        <div class="row test-section">
            <AdminLeftMenu/>
            <div class="col-12 col-md-9 test-section d-flex flex-column justify-content-center align-items-center py-2">
            <form>
                <div class="mb-3">
                    <label for="subjectInput" class="form-label">Subject Name</label>
                    <input type="text" class="form-control" id="subjectInput" name='subjectInput'/>
                </div>
                <div className="mb-3">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select class to add this subject</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>   
                </div>
                <button type="submit" class="btn btn-sm btn-primary">Add</button>
            </form>             
            </div>  
        </div>
    </div>
  )
}

export default AddSubject