import React from 'react'

export default function Job({job}) {
    const {img,title,jobs} = job
  return (
    <div>
        <div className='bg-light px-4 py-4 rounded'>
                <img className='mb-3' src={img} alt="" />
                <h5>{title}</h5>
                <p className='text-gray'>{jobs}</p>
        </div>
    </div>
  )
}
