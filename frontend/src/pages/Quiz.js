import React, {useEffect, useState, useCallback, useRef} from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import Timer from '../components/Timer'

const Quiz = () => {
    const submitTest = () => { console.log("submitted") }
    const {state} = useLocation();
    const {time, testData} = state

    let parsedTestData = JSON.parse(testData)
    const [allQuestionData, setAllQuestionData] = useState(parsedTestData[0])
    const [questionBtnState, setQuestionBtnState] = useState({})
    const [allButtons, setAllButtons] = useState([])
    const [questionState, setQuestionState] = useState({reviewLater: false, checked: false})
    const goToQuestion = (e) => { 
        let radioInputs = document.getElementById("radioInputs");
        let options = radioInputs. querySelectorAll("input");
        for(let option of options){
            if(option.checked){
                setQuestionState((prevObj) => {
                    return {
                        ...prevObj,
                        checked: true
                    }
                })
                // setAllQuestionData()
            }
        }

        for(let option of options){
            option.checked = false;    
        }
        uncheckRadioInputs();
        let classes = e.target.classList;
        let subId = `${classes[5]} ${classes[6]}`
        let qid = parseInt(e.target.textContent);
        console.log(classes, qid);
        setQuestionState((prevObj) => {return {
            ...prevObj,
            statement: allQuestionData[subId][qid-1]["statement"],
            option1: allQuestionData[subId][qid-1]["option1"],
            option2: allQuestionData[subId][qid-1]["option2"],
            option3: allQuestionData[subId][qid-1]["option3"],
            option4: allQuestionData[subId][qid-1]["option4"],
        }})
    }
    // const [questionsData, setQuestionsData] = useState({})
    const reviewLater = (e) => {
        
    }
    const uncheckRadioInputs = () => {

    }

    const showQuestions = (e) => {
        let btn = e.target;
        let qBox = document.getElementById(btn.getAttribute("data-bs-target"));
        let allQBox = document.getElementById("nav-tabContent");
        allQBox = allQBox.getElementsByTagName("div");
        console.log(allQBox);
        for(let qDiv of allQBox){
            qDiv.classList.remove("active");
        }
        qBox.classList.add("active");
    }

    let parsedObj = parsedTestData[0]
    let keyArr = []
    let quesArr = []
    for(let keys in parsedObj){
        keyArr.push(keys)
        quesArr.push(parsedObj[keys])
    }
  return (
    <div className="container">
        <div className="row">
            <div class="col-12 my-2">
                <div id="questions" className=''>
                    <div class=" bg-dark p-3 d-flex justify-content-between">
                    <div>
                    </div>
                        <div>
                        <Timer duration={parseInt(time)*60}/>
                        <button type="submit" id="submitButton" onclick="submitTest({{noq}})" class="btn btn-sm btn-success">Submit Test</button>
                        </div>
                    </div>
                    <div class="shadow p-4 rounded" id="que">
                        <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        {
                        Object.keys(allQuestionData).map((keys,i)=>{
                            return (
                                <button key={i} class="nav-link" id={keys} data-bs-toggle="tab" data-bs-target={`#nav-${keys.replaceAll(' ', '')}`} onClick={showQuestions} type="button" role="tab" aria-controls={`nav-${keys.replaceAll(" ","")}`} aria-selected="true">{keys}</button>
                            )
                        })
                        }</div>
                        <div class="tab-content" id="nav-tabContent">
                            {Object.keys(allQuestionData).map((keys, i)=>{ return (<div key={i} class="tab-pane fade show" id={`#nav-${keys.replaceAll(' ', '')}`} role="tabpanel" aria-labelledby={`nav-${keys.replaceAll(" ","")}-tab`}>
                                <div id="qButtons">
                                {allQuestionData[keys].map((item, j) => {
                                    return <button key={`${keys.replaceAll(' ', '')}${j+1}`} onClick={goToQuestion} id={`${keys.replaceAll(' ', '')}q${j+1}`} class={`btn btn-sm btn-${questionState.checked ? "success" : "danger"} my-1 me-1 ${keys}`} >{j+1}</button>
                                })
                            }
                            </div>
                            </div>)})}
                        </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="border border-2 border-success my-3 px-5 py-3">
                    <p id='statement'>{questionState.statement}</p>
                    <form action="" className='' id='radioInputs'>
                        <input type="radio" className='' name='options' id='op1'/>
                        <label className="ms-2" htmlFor="op1" id="option1">{questionState.option1}</label><br /><br />
                        <input type="radio" className='' name='options' id='op2'/>
                        <label className="ms-2" htmlFor="op2" id="option2">{questionState.option2}</label><br /><br />
                        <input type="radio" className='' name='options' id='op3'/>
                        <label className="ms-2" htmlFor="op3" id="option3">{questionState.option3}</label><br /><br />
                        <input type="radio" className='' name='options' id='op4'/>
                        <label className="ms-2" htmlFor="op4" id="option4">{questionState.option4}</label>
                    </form>
                    <div className="d-flex justify-content-center mt-4">
                        {/* <button className='btn btn-sm btn-secondary me-2' onClick={goToPreviousQuestion}><AiOutlineArrowLeft/> Previous</button>
                        <button className='btn btn-sm btn-secondary me-2' onClick={goToNextQuestion}>Next <AiOutlineArrowRight/></button> */}
                        {/* <button className='btn btn-sm btn-primary' onClick={reviewLater}>Review Later</button> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quiz