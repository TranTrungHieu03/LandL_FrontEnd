import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

// Sample data for truck status
const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Aug', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Sep', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Oct', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Nov', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Dec', uv: 3490, pv: 4300, amt: 2100 },
];

// Custom tooltip component for displaying data
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-white border p-2 rounded shadow-lg">
                <p className="label">{`${label}: ${payload[0].value}`}</p>
                <p className="intro">{`In ${label}, data recorded.`}</p>
                <p className="desc">Truck status overview.</p>
            </div>
        );
    }
    return null;
};

const TruckStatus = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-[100%]"> {/* Full width and height for responsiveness */}
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 25,
                            right: 30,
                            left: 0,
                            bottom: -2,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Area type="monotone" dataKey="uv" stroke="#FF8042" fill="#FF8042" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TruckStatus;
