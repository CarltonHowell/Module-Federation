import * as React from "react"
import {Link} from "react-router-dom";
import {getRouteWithBase} from "../helpers";

const Company = () => {

    return (
        <>
            <h1>Company</h1>
             <br />
            <Link to={'/shareholders'}>Go to Home</Link>
              <style>{`
                body {
                    background-color:  #bcffb8;
                }
            `}</style>
        </>
    )
}

export default Company;