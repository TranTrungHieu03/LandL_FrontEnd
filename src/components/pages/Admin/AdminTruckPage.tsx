import Miles from "@/components/organisms/Admin/Truck/Miles"
import TableTruck from "@/components/organisms/Admin/Truck/TableTruck"
import TruckStatus from "@/components/organisms/Admin/Truck/TruckStatus"
import PaginationItems from "@/components/organisms/Global/PaginationSelector"

const AdminTruckPage = () => {
    return (
        <div className="grid grid-cols-1 gap-3 p-4 w-full h-full overflow-hidden">
            <div className="grid grid-cols-2 w-full h-full gap-5 rounded">
                <div className="bg-white col-span-1 w-full h-full">
                    <Miles />
                </div>
                <div className="bg-white col-span-1 w-full h-full">
                    <TruckStatus />
                </div>
            </div>
            <div className="bg-white h-full w-full col-span-1">
                <TableTruck />
            </div>
            <div className="col-span-1">
                {/* <PaginationItems /> */}
            </div>
        </div>
    )
}

export default AdminTruckPage