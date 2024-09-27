import { LineChart, CartesianGrid, Tooltip, Legend, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

type Data = {
    name: string,
    googleAds: number
};
const OrderChart = () => {
    const data: Data[] = [
        { name: "Jan", googleAds: 100 },
        { name: "Feb", googleAds: 120 },
        { name: "Mar", googleAds: 140 },
        { name: "Apr", googleAds: 160 },
        { name: "May", googleAds: 180 },
        { name: "Jun", googleAds: 200 },
        { name: "Jul", googleAds: 220 },
        { name: "Aug", googleAds: 340 },
        { name: "Sep", googleAds: 110 },
        { name: "Oct", googleAds: 50 },
        { name: "Nov", googleAds: 30 },
        { name: "Dec", googleAds: 20 },
    ];
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-11/12 h-[100%]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <Line name="Total Order" type="monotone" dataKey="googleAds" stroke="#FF8042" dot={{ r: 6 }} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default OrderChart