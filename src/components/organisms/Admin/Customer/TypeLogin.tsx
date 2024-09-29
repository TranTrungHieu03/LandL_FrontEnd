import { getUserTypeLogin } from "@/services/adminService";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LineChart, CartesianGrid, Tooltip, Legend, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Loading from '@/components/templates/Loading.tsx'

type Data = {
    name: string;
    googleAds: number;
    normalAds: number;
};

const TypeLogin = () => {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // Fetch user login data from the API
    const getUserType = async () => {
        try {
            setLoading(true); // Start loading

            const response = await getUserTypeLogin();

            // Check if the response is successful
            if (response?.success) {
                const fetchedData = response.result?.data as Data[];

                // Validate data and update state
                if (Array.isArray(fetchedData) && fetchedData.length > 0) {
                    setData(fetchedData);
                } else {
                    toast.error("No data found for user login.");
                }
            } else {
                toast.error(response?.result?.message || "Failed to fetch data");
            }
        } catch (error) {
            toast.error("An error occurred while fetching data.");
        } finally {
            setLoading(false); // End loading
        }
    };

    useEffect(() => {
        getUserType();
    }, []);

    return (
        loading ? (
            <Loading />
        ) : (
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-11/12 h-[95%]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36} />
                            <Line
                                name="Google Ads"
                                type="monotone"
                                dataKey="googleAds"
                                stroke="#00C49F"
                                dot={{ r: 6 }}
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                name="Normal Ads"
                                type="monotone"
                                dataKey="normalAds"
                                stroke="#FF8042"
                                dot={{ r: 6 }}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    );
};

export default TypeLogin;
