import React, {useState} from 'react';
import ServiceDetail from "./ServiceDetail.jsx";
import ServicesList from "./ServicesList.jsx";
import {useSelector} from "react-redux";

const Services = () => {
    const [serviceName, setServiceName] = useState();
    const clusterId = useSelector(state => state.cluster.clusterId);

    const initService = () => {
        setServiceName();
    }



    return (
        <div>
            {serviceName ?
                <ServiceDetail serviceName={serviceName} initService={initService}/>
                : <ServicesList setService={setServiceName}/>
            }
        </div>
    );
};

export default Services;