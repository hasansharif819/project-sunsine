import React from 'react';

const SingleService = ({ service }) => {
  const { name, des, price, img } = service;
  return (
    <div className="mockup-phone border-primary">
      <div className="camera"></div>
      <div className="display">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-primary font-bold">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{des}</p>
            <h3 className='text-secondary font-bold'>Price: {price} tk</h3>
            <div className="card-actions justify-end">
              <div className="btn btn-primary badge badge-outline">Booked Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;