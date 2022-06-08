import React, { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router';

interface Props {
    children: JSX.Element
}

const Privateroute = ({children}: Props) => {
    const user = false

    const location = useLocation()

    // if(isloading)
    //     {
    //         return <div className="sk-chase">
    //         <div className="sk-chase-dot"></div>
    //         <div className="sk-chase-dot"></div>
    //         <div className="sk-chase-dot"></div>
    //         <div className="sk-chase-dot"></div>
    //         <div className="sk-chase-dot"></div>
    //         <div className="sk-chase-dot"></div>
    //       </div>
    //     }
    if(user)
        {
            return children;
        }
    return <Navigate to="/login" state={{from: location}} />
};

export default Privateroute;