import React from 'react'
import { useEffect, useState } from 'react'

const SeeIds = () => {

    const [ids, setIds] = useState([])

    async function fetchIds(e){
        let id = e.target.id
        let heading = document.getElementById("heading")
        let url=""
        if(id=="subjectIds"){
            url="http://127.0.0.1:8000/api/subject/" 
            heading.textContent = "Subjects Ids"
        }else if(id=="chapterIds"){
            url="http://127.0.0.1:8000/api/chapter/" 
            heading.textContent = "Chapters Ids"
        }else if(id=="courseIds"){
            url="http://127.0.0.1:8000/api/course/" 
            heading.textContent = "Courses Ids"
        }else{
            url="http://127.0.0.1:8000/api/test/" 
            heading.textContent = "Tests Ids"
        }
        let res = await fetch(url)
        let data = await res.json()
        setIds(data)
    }

    useEffect(() => {
        async function fetchCourseIds(){
            let res = await fetch("http://127.0.0.1:8000/api/course/")
            let data = await res.json()
            setIds(data)
        }
      fetchCourseIds()
    }, [])
    
  return (
    <div className='container'>
        <div className="d-flex flex-column">
            <div className="d-flex border justify-content-center border-dark mt-2">
                <span className='border border-dark m-2 p-2' id="courseIds" onClick={fetchIds}>Course Ids</span>
                <span className='border border-dark m-2 p-2' id="subjectIds" onClick={fetchIds}>Subject Ids</span>
                <span className='border border-dark m-2 p-2' id="chapterIds" onClick={fetchIds}>Chapter Ids</span>
                <span className='border border-dark m-2 p-2' id="testIds" onClick={fetchIds}>Test Ids</span>
            </div>
            <div className="mb-5">
                <h1 id="heading">Courses Ids</h1>
                <div className=''>
                    {ids && ids.map((item) => { return <div key={item.id} className="d-flex mt-2 py-2 px-5 justify-content-between border border-dark">
                        <span>{item.title}</span>
                        <span>{item.id}</span>
                    </div>})}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SeeIds