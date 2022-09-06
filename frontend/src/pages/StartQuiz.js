import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import Quiz from './Quiz';

const StartQuiz = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    let { time, noq, subject_id, chapter_id, course_id } = state

    useEffect(() => {
        async function fetchTestData(){
            localStorage.clear()
            let arr = []
            let res = await fetch(`http://127.0.0.1:8000/api/new/?noq=${noq}&subject_id=${subject_id}&chapter_id=${chapter_id}&course_id=${course_id}&format=json`)
            let data = await res.json()
            const testData = await JSON.stringify(data)
            // console.log(data, typeof data, Array.isArray(data))
            // data = JSON.parse(data)
            // arr.push(data)
            navigate('/quiz', { state: { time: time, testData: testData} });
        }
        fetchTestData();
    }, [])
    return (
    <div>
    </div>
  )
}

export default StartQuiz