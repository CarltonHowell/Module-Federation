import * as React from "react"
import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <div style={{backgroundColor: '#e7e7e7', padding: 20, display: 'flex'}}>
            <div style={{marginRight: 20}}>
                <Link to={'/shareholders'}>Shareholders</Link>
            </div>
            <div>
                <Link to={'/public'}>Public Markets</Link>
            </div>
          <style>{`
                body {
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </div>
    )
}

export default Navigation;