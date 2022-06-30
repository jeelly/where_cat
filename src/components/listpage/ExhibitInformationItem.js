import React from 'react';

const InformationItem = ({information}) => {
    console.log(information)
    return (
        <ul>
            <li>{information.title}</li> 
            <li>{information.subtitle}</li> 
            <li>{information.startData}</li> 
            <li>{information.endData}</li> 
            <li>{information.address}</li> 
            <li>{information.subInfo}</li> 
            <li>{information.openingHours}</li> 
            <li>{information.phoneNum}</li> 
            <li>{information.siteURL}</li> 
            {/* <li>{information.LatLng}</li>  */}
        </ul>
    );
};

export default InformationItem;