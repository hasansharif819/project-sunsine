import { useEffect, useState } from "react";

function useService(){
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch("service.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services])
    
    return services;
}

export default useService;