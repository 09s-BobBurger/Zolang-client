import React, {useEffect, useState} from 'react';
import ServiceDetail from "./ServiceDetail.jsx";
import ServicesList from "./ServicesList.jsx";

const Services = () => {
    const [servicesData, setServicesData] = useState([]);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        setServicesData(
            [
                {
                    "name": "kubernetes",
                    "namespace": "default",
                    "labels": {
                        "component": "apiserver",
                        "provider": "kubernetes"
                    },
                    "type": "ClusterIP",
                    "clusterIP": "10.100.0.1",
                    "port": 443,
                    "age": "2d"
                },
                {
                    "name": "kubernetes",
                    "namespace": "default",
                    "labels": {
                        "component": "apiserver",
                        "provider": "kubernetes"
                    },
                    "type": "ClusterIP",
                    "clusterIP": "10.100.0.1",
                    "port": 443,
                    "age": "2d"
                }
            ]
        )
    }, [])

    return (
        <div>
            {!selectedService && <ServicesList services={servicesData} setService={setSelectedService}/>}
            {selectedService && <ServiceDetail service={selectedService} setService={setSelectedService}/>}
        </div>
    );
};

export default Services;