import { getAllOrderAmountInYear } from '@/services/adminService';
import { useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Data = {
    name: string;
    total: number;
    system: number;
    vat: number;
}

const OrderAmount = () => {
    const [data, setData] = useState<Data[]>([]);

    const getAmountInYear = async () => {
        const response = await getAllOrderAmountInYear();
        if (response.success) {
            setData(response.result?.data)
        }
    }
    useEffect(() => {
        getAmountInYear();
    }, [])
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-11/12 h-[95%]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 15, right: 10, left: 10, bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="system" fill="#FF8042" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                        <Bar dataKey="vat" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default OrderAmount