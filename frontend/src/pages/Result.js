import React from 'react'
import {AiFillWarning, AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'

const Result = () => {
  return (
    <div className="container">
        <div className="row mt-3">
            <div className="col-12 col-md-4">
                <div className="shadow px-5 pt-2 pb-1 rounded mb-3">
                    <h4>Physics</h4>
                    <hr />
                    <p>Positive Marks: <b className='text-success'>4</b></p>
                    <p>Negative Marks: <b className='text-danger'>4</b></p>
                    <p>Total Marks: <b className='text-dark'>4</b></p>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <div className="col-12 col-md-4">
                <div className="shadow px-5 pt-2 pb-1 rounded mb-3">
                    <h4>Total Marks</h4>
                    <hr />
                    <p>Positive Marks: <b className='text-success'>4</b></p>
                    <p>Negative Marks: <b className='text-danger'>4</b></p>
                    <p>Total Marks: <b className='text-dark'>4</b></p>
                </div>
            </div>
        </div>
        <hr />
        <div className="row">
            <h3 className='text-center'>Answers and Solutions</h3>
            <div className="col-12 col-md-4">
                <div className="border pt-2 pb-1 rounded mb-2 px-2">
                    <div className="d-flex flex-column">
                        <AiFillWarning size={30} className="text-warning"/>
                        <AiFillCheckCircle className="text-success"/>
                        <AiFillCloseCircle className="text-danger"/>
                        <p className=''><b>Q. 1</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque praesentium quam eos exercitationem omnis at voluptate veniam ratione nulla quo, ducimus sint adipisci? Consequuntur odio porro sequi aperiam quam.</p>
                        <p>Your Answer: <b></b></p>
                        <p>Correct Answer: <b></b></p>
                        <p><b>Hint/Explaination: </b></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Result