import * as React from "react"
import {Link} from "react-router-dom";
import Overview from "../components/Overview";

const Home = () => {
    return (
        <>
            <h1>Home</h1>
             <br />
             <Overview title="Some title"body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dicta dignissimos ipsa magnam molestiae nemo nulla placeat provident recusandae sed. Cupiditate eum in non, officiis perspiciatis quisquam repudiandae sequi sunt!" />
             <br />
            <Link to={'/shareholders/company'}>Go to company</Link>
             <style>{`
                body {
                    background-color:  #bcffb8;
                }
            `}</style>
        </>
    )
}

export default Home;