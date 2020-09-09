import * as React from "react"
import {Link} from "react-router-dom";
import {getRouteWithBase} from "../helpers";

const Company = () => {

    return (
        <>
             <h1>Public Company</h1>
             <br />
            <Link to={'/public'}>Go to home</Link>
            <style>{`
                body {
                    background-color:  #ffdbdb;
                }
            `}</style>
        </>
    )
}

export default Company;