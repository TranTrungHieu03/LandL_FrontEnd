import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Male', value: 50 },
    { name: 'Female', value: 35 },
    { name: 'Others', value: 15 },
];

const COLORS = ['#FFBB28', '#00C49F', '#FF6666'];

const BuyersProfile = () => {
    const [innerRadius, setInnerRadius] = useState(80); // Default inner radius
    const [outerRadius, setOuterRadius] = useState(100); // Default outer radius

    useEffect(() => {
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
        <div className="flex flex-col items-center justify-center h-full relative">
            <h3 className='absolute top-2 font-light'>Buyers Profile</h3>
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
                            formatter={(value, name) => [`${value}%`, `${name}`]}
                            labelFormatter={(label) => `${label}`} // Display the label
                        />
                        <Legend
                            layout="vertical"
                            align="right"
                            verticalAlign="middle"
                            formatter={(value, entry) => (
                                <span>
                                    {value}: {entry.payload?.value}%
                                </span>
                            )}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BuyersProfile;
