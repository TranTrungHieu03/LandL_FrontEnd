import { LineChart, CartesianGrid, Tooltip, Legend, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

type Data = {
    name: string,
    googleAds: number,
    normalAds: number
};

const TypeLogin = () => {
    const data: Data[] = [
        { name: "Jan", googleAds: 100, normalAds: 90 },
        { name: "Feb", googleAds: 120, normalAds: 85 },
        { name: "Mar", googleAds: 140, normalAds: 95 },
        { name: "Apr", googleAds: 160, normalAds: 110 },
        { name: "May", googleAds: 180, normalAds: 130 },
        { name: "Jun", googleAds: 200, normalAds: 150 },
        { name: "Jul", googleAds: 220, normalAds: 160 },
        { name: "Aug", googleAds: 340, normalAds: 170 },
    ];

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-11/12 h-[90%]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <Line name="Google ads" type="monotone" dataKey="googleAds" stroke="#00C49F" dot={{ r: 6 }} activeDot={{ r: 8 }} />
                        <Line name="Normal ads" type="monotone" dataKey="normalAds" stroke="#FF8042" dot={{ r: 6 }} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TypeLogin;
