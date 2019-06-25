import React from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';


const reportGraph = (props) => {
    const { data, width } = props;

    let toolTipStyle = {
        maxWidth: '320px',
        padding: '2px',
        borderRadius: '5px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }

    let toolTipItemStyle = {
        maxWidth: '300px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }

    let tick = true;
    let height= 200;
    let barSize = 60;
    let margin= {top:10, right: 5, left: -5, bottom: -5};
    if(window.innerWidth <= 700) {
        tick = false;
        height= 180;
        barSize = 30;
        margin= {top:10, right: 5, left: -20, bottom: -15};
    }

    if(window.innerWidth <= 600){
        barSize = 20;
        toolTipStyle = {
            maxWidth: '120px',
            padding: '2px',
            borderRadius: '5px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }
        toolTipItemStyle = {
            maxWidth: '100px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        }
        margin= {top:10, right: 5, left: -25, bottom: -15};
    }

    return (
        <div>
            <BarChart 
                data={data} 
                width={width*0.8} 
                height={height}
                margin={margin}>
                <XAxis dataKey="name" tick={tick} tickSize={4} stroke='#e91e63'/>
                <YAxis stroke='#e91e63' tickCount={6}/>
                <Tooltip contentStyle={toolTipStyle} labelStyle={toolTipItemStyle} />
                <CartesianGrid strokeDasharray="3 3" stroke='#e91e63'/>
                <Bar dataKey="value" fill="#1a237e" barSize={barSize} />
            </BarChart>
        </div>
    )
}

export default reportGraph;