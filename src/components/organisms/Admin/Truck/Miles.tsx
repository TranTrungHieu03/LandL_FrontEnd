import { getTruckMiles } from "@/services/adminService";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

// Define the type for data items
type DataItem = {
    name: string;
    km: number; // Change the data point from 'uv' to 'km'
};

// Function to provide introductory text based on the month
const getIntroOfMonth = (label: string) => {
    return `In ${label}, the distance traveled was recorded.`;
};

// Custom tooltip component for displaying data
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-white border p-2 rounded shadow-lg">
                <p className="label">{`${label}: ${payload[0].value} km`}</p>
                <p className="intro">{getIntroOfMonth(label)}</p>
                <p className="desc">Distance traveled in kilometers.</p>
            </div>
        );
    }

    return null;
};

const Miles = () => {
    const [data, setData] = useState<DataItem[]>([]);

    const getMilesTruck = async () => {
        const response = await getTruckMiles();
        if (response.success) {
            setData(response.result?.data)
        } else {
            toast.error("Error in fetch data trucks miles!")
        }
    }

    useEffect(() => {
        getMilesTruck();
    }, [])
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-[90%]"> {/* Use full width and height */}
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 25,
                            right: 30,
                            left: 20,
                            bottom: -2,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar dataKey="km" barSize={20} fill="#FF8042" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Miles;
