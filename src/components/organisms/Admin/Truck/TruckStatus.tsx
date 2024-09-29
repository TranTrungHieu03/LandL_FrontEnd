import { getTruckStatusInYear } from '@/services/adminService';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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

type Data = {
    name: string;
    count: number;
};

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
    const [data, setData] = useState<Data[]>([]);
    const getDataStatusTruck = async () => {
        const response = await getTruckStatusInYear();
        if (response.success) {
            setData(response.result?.data)
        } else {
            toast.error("Error in fetching data truck status in year!")
        }
    }
    useEffect(() => {
        getDataStatusTruck();
    }, [])
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-[300px]"> {/* Full width and height for responsiveness */}
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
                        <Area type="monotone" dataKey="count" stroke="#FF8042" fill="#FF8042" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TruckStatus;
