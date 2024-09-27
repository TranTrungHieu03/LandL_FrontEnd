import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { useState, useEffect } from 'react';

const data = [
    { name: 'Direct', value: 58 },
    { name: 'Organic', value: 22 },
    { name: 'Paid', value: 12 },
    { name: 'Social', value: 28 },
];

const COLORS = ['#FFBB28', '#00C49F', '#0088FE', '#FF8042'];

const WebVisitor = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // State for hovered index
    const [innerRadius, setInnerRadius] = useState(80); // Default inner radius
    const [outerRadius, setOuterRadius] = useState(100); // Default outer radius

    const onPieEnter = (data: any, index: number) => {
        setActiveIndex(index); // Set the active index on hover
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth; // Get the window width
            setInnerRadius(width < 1000 ? 60 : 80); // Smaller inner radius for small screens
            setOuterRadius(width < 1000 ? 80 : 100); // Smaller outer radius for small screens
        };

        handleResize(); // Call on mount
        window.addEventListener('resize', handleResize); // Add resize event listener

        return () => window.removeEventListener('resize', handleResize); // Clean up on unmount
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full relative"> {/* Center vertically and horizontally */}
            <span className='absolute top-2 font-light'>Website Visitor</span>
            <div className="w-11/12 h-[300px] flex items-center justify-center"> {/* Center the chart within this div */}
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%" // Center horizontally
                            cy="50%" // Center vertically
                            innerRadius={innerRadius} // Dynamic inner radius
                            outerRadius={outerRadius} // Dynamic outer radius
                            paddingAngle={5}
                            dataKey="value"
                            onMouseEnter={onPieEnter} // Add the mouse enter handler
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend
                            layout="vertical"
                            align="right"
                            verticalAlign="middle"
                            formatter={(value, entry) => (
                                <span>
                                    {value} {entry.payload?.value}%
                                </span>
                            )}
                        />
                        <Tooltip content={<CustomTooltip active={activeIndex !== null} payload={activeIndex !== null ? [data[activeIndex]] : []} />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

// Custom Tooltip component
const CustomTooltip = ({ active, payload }: { active: boolean; payload: any[] }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-gray-300 p-2 rounded shadow-md">
                <p>{`${payload[0].name} : ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

export default WebVisitor;
