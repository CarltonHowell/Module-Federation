import * as React from "react"
import {Link} from "react-router-dom";

const Overview = React.lazy(() => import("app1/Overview"));

const Home = () => {
    return (
        <>
             <h1>Public Home</h1>
            <br />

             <React.Suspense fallback={'...loading'}>
                 <Overview title="A different title" body="A different body text"/>
             </React.Suspense>

            <br />
            <Link to={'/public/company'}>Go to company</Link>
            <style>{`
                body {
                    background-color:  #ffdbdb;
                }
            `}</style>
        </>
    )
}

export default Home;