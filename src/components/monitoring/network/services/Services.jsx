import React, {useEffect, useState} from 'react';
import ServiceDetail from "./ServiceDetail.jsx";
import ServicesList from "./ServicesList.jsx";
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import loginUtil from "../../../../util/login.js";

const Services = () => {
    const [servicesData, setServicesData] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const clusterId = useSelector(state => state.cluster.clusterId);

    useEffect(() => {
        axios
            .get(`/api/v1/cluster/${clusterId}/service`,
                {
                    headers: {
                        "Authorization": "Bearer " + loginUtil.getAccessToken(),
                    }
                })
            .then((res) => {
                setServicesData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            {!selectedService && <ServicesList services={servicesData} setService={setSelectedService}/>}
            {selectedService && <ServiceDetail service={selectedService} setService={setSelectedService}/>}
        </div>
    );
};

export default Services;