import React, { useEffect, useState } from 'react'
import img from '../../image/cover.png'
import './Home.css'
import Job from '../JobCategory/Job';
import { useLoaderData } from 'react-router-dom';
import Feature from '../Feature/Feature';


export default function Home() {
  const [jobCategory, setjobCategory] = useState([]);
  const [show ,setShow] = useState(false)
   const features = useLoaderData();
   
  useEffect(() => {
    fetch('jobCategory.json')
      .then(res => res.json())
      .then(data => setjobCategory(data))
  }, [])


  return (
    <div>
      <div className='bg-light'>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 order-md-first">
              <div>
                <h1 className="banner-heading">One Step Closer To Your <span>Dream Job</span></h1>
                <p className="banner-desc">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn-custom">Get Started</button>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={img} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className='text-center'>
          <h1>Job Category List</h1>
          <p className='text-gray'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4'>
          {
            jobCategory.map(job =>
              <div className='col' key={job.id}>
                <Job job={job}></Job>
              </div>
            )
          }
        </div>
      </div>
      <div className='container my-5'>
      <div className='text-center'>
          <h1>Features Jobs</h1>
          <p className='text-gray'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
      </div>
      <div className='container my-4'>
      <div className='row'>
        {show || features.slice(0, 4).map((feature) => (
          <Feature key={feature.id} feature={feature} />
        ))}
        {show &&
          features.map((feature) => (
            <Feature key={feature.id} feature={feature} />
          ))}
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-center">
        {!show && (
          <button
            onClick={() => setShow(true)}
            className="details me-md-2"
            type="button"
          >
            See All Jobs
          </button>
        )}
      </div>
    </div>
      </div>
    
  )
}
