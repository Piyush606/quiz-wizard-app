import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminLeftMenu from './AdminLeftMenu'

const AddClass = () => {
  return (
    <div class="container-fluid">
        <div class="row test-section">
            <AdminLeftMenu/>
            <div class="col-12 col-md-9 test-section d-flex flex-column justify-content-center align-items-center py-2">
            <form>
                <div class="mb-3">
                    <label for="subjectInput" class="form-label">Class Name</label>
                    <input type="text" class="form-control" id="subjectInput" name='subjectInput'/>
                </div>
                <button type="submit" class="btn btn-sm btn-primary">Add</button>
            </form>             
            </div>   
        </div>
    </div>
  )
}

export default AddClass