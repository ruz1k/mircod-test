import React from "react";
import {Route} from 'react-router-dom'

import {Mircod} from "../pages";

const RoutePages = () => {
    return (
        <>
            <Route exact path="/" component={Mircod}/>
        </>
    )
};

export default RoutePages;