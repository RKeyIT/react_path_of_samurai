import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
    return <>
        <h1>[404] This page is not found! Go <Link to="/">home</Link></h1>
    </>
}

export default NotFound