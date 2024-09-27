import OrderChart from "@/components/organisms/Admin/Order/OrderChart"
import TableOrder from "@/components/organisms/Admin/Order/TableOrder"
import PaginationItems from "@/components/organisms/Global/PaginationItems"


const AdminOrderPage = () => {
    return (
        <div className="grid grid-cols-1 gap-3 p-4 w-full h-full overflow-hidden">
            <div className="bg-white col-span-1 rounded h-full w-full">
                <OrderChart />
            </div>
            <div className="bg-white col-span-1 rounded h-full w-full">
                <TableOrder />
            </div>
            <div className="col-span-1">
                <PaginationItems />
            </div>
        </div>
    )
}

export default AdminOrderPage