import Miles from "@/components/organisms/Admin/Truck/Miles"
import TableTruck from "@/components/organisms/Admin/Truck/TableTruck"
import TruckStatus from "@/components/organisms/Admin/Truck/TruckStatus"
import PaginationItems from "@/components/organisms/Global/PaginationSelector"
import { getAllTruck } from "@/services/adminService"
import { useEffect, useState } from "react"

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

const AdminTruckPage = () => {
    const [page, setPage] = useState<number>(1); // Start from page 1
    const [totalPage, setTotalPage] = useState<number>(0);
    const [trucks, setTrucks] = useState<Truck[]>([]); // Use specific type for trucks
    const [loading, setLoading] = useState<boolean>(false);

    const getAllTruckPagination = async () => {
        setLoading(true);
        try {
            const response = await getAllTruck(page); // Pass the page number
            if (response.success) {
                setPage(response.result?.pagination.page);
                setTotalPage(response.result?.pagination.totalPage);
                setTrucks(response.result?.data); // Store the user data
            } else {
                console.error(response.result?.message);
            }
        } catch (error) {
            console.error('Error fetching trucks:', error);
        } finally {
            setLoading(false);
        }
    };

    // Call the API whenever the page number changes
    useEffect(() => {
        getAllTruckPagination();
    }, [page]); // Use page as the dependency

    return (
        <div className="grid grid-cols-1 gap-3 p-4 w-full h-full overflow-hidden">
            <div className="grid grid-cols-2 w-full h-full gap-5 rounded">
                <div className="bg-white col-span-1 w-full h-full rounded">
                    <Miles />
                </div>
                <div className="bg-white col-span-1 w-full h-full rounded">
                    <TruckStatus />
                </div>
            </div>
            <div className="bg-white h-full w-full col-span-1 rounded">
                <TableTruck trucks={trucks} />
            </div>
            <div className="col-span-1">
                <PaginationItems page={page} totalPage={totalPage} onPageChange={setPage} />
            </div>
        </div>
    )
}

export default AdminTruckPage