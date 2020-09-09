import * as React from 'react';

interface Props {
    title: string,
    body: string,
}

const Overview = (props: Props) => {

    return(
        <div style={{
            backgroundColor: 'yellow',
            borderStyle: 'solid',
            borderColor: 'blue',
            borderWidth: 2,
            padding: 20,
            width: 400
            }}>
            <h3>{props.title}</h3>
            <p>
                {props.body}
             </p>
        </div>
    )
}

export default Overview;