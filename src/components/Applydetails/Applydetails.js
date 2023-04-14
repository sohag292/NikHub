import React from 'react'
import { FaSearchLocation, FaDollarSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Applydetails({ carts }) {
  const { image, company_name, job_title, work_area, time, address, salary } = carts;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/job/${carts.id}`);
  };
  return (
    <div className='container my-4'>
      <div className="d-flex flex-column flex-md-row border justify-content-between align-items-center rounded shadow p-4">
        <div className='w-25 h-75 mb-4 mb-md-0'>
          <img src={image} className=" w-75 h-100" alt="..." />
        </div>
        <div className="card-body">
          <h4 className="card-title mb-3">{job_title}</h4>
          <h6>{company_name}</h6>
          <div className="d-flex my-3 ">
            <button className='btn btn-outline-primary me-3  fw-bold'>{work_area}</button>
            <button className='btn btn-outline-primary  fw-bold'>{time}</button>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <p className='me-4 text-gray fw-bold'><FaSearchLocation /> {address}</p>
            <p className='text-gray fw-bold'><FaDollarSign />Salary: {salary}</p>
          </div>
        </div>
        <div className='ms-auto'>
          <button onClick={handleViewDetails} className="details-btn me-md-2">View Details</button>
        </div>
      </div>
    </div>

  )
}
