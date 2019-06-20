import React from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';


const reportGraph = (props) => {
    const { data } = props;

    let tick = true;
    let height= 200;
    let barSize = 40;
    if(window.innerWidth <= 700) {
        tick = false;
        height= 150;
        barSize = 30;
    }

    return (
        <div>
            <BarChart data={data} width={window.innerWidth*0.8} height={height}>
                <XAxis dataKey="name" tick={tick}/>
                <YAxis/>
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3"/>
                <Bar dataKey="value" fill="#254E70" barSize={barSize} />
            </BarChart>
        </div>
    )
}

export default reportGraph;