import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
    TableHead,
} from "@/components/atoms/ui/table";

type Truck = {
    truckId: number;
    truckName: string;
    plateCode: string;
    status: string;
    manufacturer: string;
    vehicleModel: string;
    frameNumber: string;
    engineNumber: string;
}

// Define the Props type
type Props = {
    trucks: Truck[];
}

const TableTruck = ({ trucks }: Props) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter trucks based on the search query (searching by truckName and plateCode)
    const filteredTrucks = trucks.filter((truck) =>
        truck.truckName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        truck.plateCode.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full h-full">
            {/* Search Input */}
            <div className='h-[95%]'>
                <div>
                    <input
                        type="text"
                        placeholder="Search by truck name or plate code..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-2 border rounded w-full bg-white"
                    />
                </div>
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Truck Id</TableHead>
                                <TableHead>Truck Name</TableHead>
                                <TableHead>Plate Code</TableHead>
                                <TableHead>Manufacturer</TableHead>
                                <TableHead>Model</TableHead>
                                <TableHead>FrameNumber</TableHead>
                                <TableHead>EngineNumber</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredTrucks.length > 0 ? (
                                filteredTrucks.map((truck) => (
                                    <TableRow key={truck.truckId}>
                                        <TableCell className="font-medium">{truck.truckId}</TableCell>
                                        <TableCell >{truck.truckName}</TableCell>
                                        <TableCell>{truck.plateCode}</TableCell>
                                        <TableCell>{truck.manufacturer}</TableCell>
                                        <TableCell>{truck.vehicleModel}</TableCell>
                                        <TableCell>{truck.frameNumber}</TableCell>
                                        <TableCell>{truck.engineNumber}</TableCell>
                                        <TableCell>
                                            <div
                                                className={`rounded-full flex justify-center text-white hover:bg-opacity-75 ${truck.status === "Active" ? 'bg-green-400 hover:bg-green-600' : 'bg-red-400 hover:bg-red-600'
                                                    }`}
                                            >
                                                {truck.status}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">No trucks found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default TableTruck;
