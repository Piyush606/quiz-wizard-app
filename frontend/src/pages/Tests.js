import React, {useEffect, useState} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Tests = () => {
    const [courses, setCourses] = useState([])
    const [subjects, setSubjects] = useState([])
    const navigate = useNavigate();
    
    const goToTestList = (e) => {
        let id = parseInt(e.target.id.slice(3))
        navigate('/testlist', { state: { subject_id: id} });
    }

    const changeTestSection = (e) => {
        let classTitle = document.getElementById("class-title")
        classTitle.textContent = e.target.textContent + " Subjects"
        let allBtns = document.querySelectorAll(".classButtons")
        for(let btn of allBtns){
            btn.classList.remove("btn-dark");
        }
        e.target.classList.add("btn-dark")
        async function fetchSubjects(id){
            let res = await fetch(`http://127.0.0.1:8000/api/subject/?course_id=${id}&format=json`)
            let data = await res.json()
            setSubjects(data)
        }
        fetchSubjects(e.target.id)
    }

    useEffect(() => {
        async function fetchData(){
            let res = await fetch("http://127.0.0.1:8000/api/course/?format=json")
            let data = await res.json()
            setCourses(data)
        }
        fetchData()
    }, [])
    
  return (
    <div className="container-fluid">
        <div className="row test-section">
            <div className="col-12 col-md-3">
            <div className='test-section-menu d-flex flex-column justify-content-center align-items-center'>

            <h5 className=''>Classes and Courses</h5>
                {courses && courses.map((item) => <button key={item.id} id={item.id}  className='classButtons btn btn-sm my-2' onClick={changeTestSection}>
                    {item.title}
                </button>)}              
            </div>
            </div>  
            <div className="col-12 col-md-9 test-section d-flex flex-column py-2">
                <h3 id='class-title' className='ps-2'></h3>
                <div id="test-section">
                    <div className='row'>
                        {subjects && subjects.map((item) => <div key={item.id} className="col-12 col-md-3 mt-4 text-center"><button onClick={goToTestList} id={`btn${item.id}`} className="m-2 shadow rounded p-2 subject-links">
                            {item.title}
                            </button>
                        </div>)}
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Tests