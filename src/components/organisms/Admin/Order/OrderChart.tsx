import { getAllOrderInYear } from "@/services/adminService";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LineChart, CartesianGrid, Tooltip, Legend, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

type Data = {
    name: string,
    count: number
};
const OrderChart = () => {
    const [data, setData] = useState<Data[]>([]);

    const getOrderInYear = async () => {
        const response = await getAllOrderInYear();
        if (response.success) {
            setData(response.result?.data)
        } else {
            toast.error("Error in fetch data trucks miles!")
        }
    }

    useEffect(() => {
        getOrderInYear();
    }, [])
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-11/12 h-[95%]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <Line name="Total Order" type="monotone" dataKey="count" stroke="#FF8042" dot={{ r: 6 }} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default OrderChart