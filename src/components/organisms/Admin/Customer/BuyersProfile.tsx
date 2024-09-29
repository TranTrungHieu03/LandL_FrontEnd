import { getUserAge } from '@/services/adminService';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import toast from 'react-hot-toast';
import Loading from '@/components/templates/Loading';

type Data = {
    name: string,
    value: unknown // Change unknown to number for better type safety
}

const COLORS = ['#FFBB28', '#00C49F', '#FF6666'];

const BuyersProfile = () => {
    const [innerRadius, setInnerRadius] = useState(80); // Default inner radius
    const [outerRadius, setOuterRadius] = useState(100); // Default outer radius
    const [data, setData] = useState<Data[]>([]); // Initialize as an empty array
    const [loading, setLoading] = useState<boolean>(false); // Loading state

    const getUserAgeData = async () => {
        try {
            setLoading(true); // Start loading
            const response = await getUserAge();

            if (response?.success) {
                // Convert the response data to the required format
                const arrayData = Object.entries(response.result?.data).map(([name, value]) => ({ name, value }));
                setData(arrayData); // Set the data for the pie chart
            } else {
                toast.error(response?.result?.message || 'Failed to fetch data');
            }
        } catch (error) {
            toast.error('An error occurred while fetching data.');
        } finally {
            setLoading(false); // End loading
        }
    }

    useEffect(() => {
        getUserAgeData(); // Fetch user age data on component mount
        const handleResize = () => {
            const width = window.innerWidth; // Get the window width
            setInnerRadius(width < 1000 ? 60 : 80); // Smaller inner radius for small screens
            setOuterRadius(width < 1000 ? 80 : 100); // Smaller outer radius for small screens
        };

        handleResize(); // Call on mount to set initial sizes
        window.addEventListener('resize', handleResize); // Add resize event listener

        return () => window.removeEventListener('resize', handleResize); // Clean up on unmount
    }, []);

    return (
        loading ? <Loading /> : (
            <div className="flex flex-col items-center justify-center h-full relative">
                <h3 className='absolute top-2 font-light'>Actor Age</h3>
                <div className="w-11/12 h-80 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%" // Center horizontally
                                cy="50%" // Center vertically
                                innerRadius={innerRadius} // Use dynamic inner radius
                                outerRadius={outerRadius} // Use dynamic outer radius
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value, name) => [`${value}`, `${name}`]} // Display value as percentage
                                labelFormatter={(label) => `${label}`} // Display the label
                            />
                            <Legend
                                layout="vertical"
                                align="right"
                                verticalAlign="middle"
                                formatter={(value, entry) => (
                                    <span>
                                        {value}: {entry.payload?.value} {/* Show percentage in the legend */}
                                    </span>
                                )}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    );
};

export default BuyersProfile;
