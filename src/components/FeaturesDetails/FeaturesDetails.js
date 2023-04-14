import React from 'react';
import './FeaturesDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone,HiOutlineCurrencyDollar,HiOutlineCalendar } from "react-icons/hi";
import { addToDb } from '../../utilities/Fake';

export default function FeaturesDetails() {
  const job = useLoaderData();
  const {jobId}= useParams();

  const setData = (id)=>{
    addToDb(id);
  }

    let details = {}
    if(job){
      details = job.find(data =>data.id === jobId)
    }
    const {job_description,responsibillity, education, experience, salary, job_title,phone,email, address} = details;
  
  return (
    <div className='mb-5'>
      <h1 className="text-center bg-light py-5 mb-4">Job Details</h1>
      <div className="container">
      <div className="row">
        <div className="col-md-8">
          <p><b>Job Description: </b>{job_description}</p>
          <p><b>Job Responsibility: </b>{responsibillity}</p>
          <p><b>Educational Requirements: </b>{education}</p>
          <p><b>Experiences: </b>{experience}</p>
        </div>
        <div className="col-md-4">
          <div className='bg-light rounded p-4 mb-3'>
            <h5 className='fw-bold'>Job Details</h5>
            <hr />
            <p><HiOutlineCurrencyDollar className='icon-info'/><b>Salary:</b> {salary}</p>
            <p><HiOutlineCalendar className='icon-info'/><b>Job Title: </b> {job_title}</p>
            <h5 className='fw-bold'>Contact Information</h5>
            <hr />
            <p><HiOutlinePhone className='icon-info'/><b>Phone: </b> {phone}</p>
            <p><HiOutlineMail className='icon-info'/><b>Email: </b>{email}</p>
            <p><HiOutlineLocationMarker className='icon-info'/><b>Address:</b>{address}</p>
          </div>
          <div className="d-grid gap-2 col-12 mx-auto">
             <button onClick={()=>setData(details.id)} className="btn btn-primary text-btn" type="button">Apply Now </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  
  )
}
