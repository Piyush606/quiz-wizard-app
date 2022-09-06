import React, {useEffect, useState} from 'react'
import { Link, useLocation, useNavigate, useHistory, useSearchParams } from 'react-router-dom'


const TestList = () => {
    const [testData, setTestData] = useState([])
    // const [searchParams, setSearchParams] = useSearchParams()
    const {state} = useLocation();
    const navigate = useNavigate()

    const startTest = (e) => {
      let paramsArray = e.target.id.split("|")
      console.log(paramsArray)
      navigate('/start-quiz', { state: { time: paramsArray[0], noq: paramsArray[1], subject_id: paramsArray[2], course_id: paramsArray[3], chapter_id: paramsArray[4]} });
    }
    
    useEffect(() => {
      async function fetchTestData(){
        
        // searchParams.delete('q');
         // 👇️ update state after
        // setSearchParams(searchParams);
        const { subject_id } = state; // Read values passed on state

        let res = await fetch(`http://127.0.0.1:8000/api/test/?subject_id=${subject_id}&format=json`)
        let data = await res.json()
        setTestData(data)
      }
      fetchTestData();
    }, [])

    return (
    <div className='container my-4 test-box'>
        <div className="row">
        {testData && testData.map((item) => {
            return (<div key={item.id} className="col-12 col-md-3 my-2">
                <div className="border border-success p-3 rounded mx-1">
                    <h4>{item.title}</h4>
                    <hr />
                    <p className='my-0'><b>Added On:</b> {item.date}</p>
                    <p className='my-0'><b>Time:</b> {item.time} Minutes</p>
                    <p className='my-0'><b>Number of Questions:</b> {item.no_of_questions.split(",").reduce((partialSum, a) => parseInt(partialSum) + parseInt(a), 0)}</p>
                    <hr />
                    <button id={`${item.time}|${item.no_of_questions}|${item.subject_id}|${item.course_id}|${item.chapter_id}`} 
onClick={startTest}>
                    Start Quiz
                    </button>
                </div>
            </div>)
        })}
        </div>
    </div>  
  )
}

export default TestList