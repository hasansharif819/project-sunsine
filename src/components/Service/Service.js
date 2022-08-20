import React, { useEffect, useState } from 'react';
import useService from '../../hooks/useService';
import SingleService from './SingleService';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch("service.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services])
    return (
        <div className='my-5'>
            {
                services.map(service => <SingleService
                    key={service.id}
                    service={service}
                ></SingleService>)
            }
        </div>
    );
};

export default Service;