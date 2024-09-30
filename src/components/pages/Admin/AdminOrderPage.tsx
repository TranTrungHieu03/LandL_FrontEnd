import OrderChart from "@/components/organisms/Admin/Order/OrderChart"
import TableOrder from "@/components/organisms/Admin/Order/TableOrder"
import PaginationItems from "@/components/organisms/Global/PaginationSelector"
import { getAllOrder } from "@/services/adminService";
import { useEffect, useState } from "react";

type Order = {
    orderDetailId: number;
    orderDetailCode: string;
    reference: string;
    paymentMethod: string;
    transactionDateTime: string;
    totalPrice: number;
    status: string;
    distance: string;
    startDate: string;
}

const AdminOrderPage = () => {
    const [page, setPage] = useState<number>(1); // Start from page 1
    const [totalPage, setTotalPage] = useState<number>(0);
    const [orders, setOrders] = useState<Order[]>([]); // Use specific type for trucks
    const [loading, setLoading] = useState<boolean>(false);

    const getAllOrderPagination = async () => {
        setLoading(true);
        try {
            const response = await getAllOrder(page); // Pass the page number
            if (response.success) {
                setPage(response.result?.pagination.page);
                setTotalPage(response.result?.pagination.totalPage);
                setOrders(response.result?.data); // Store the user data
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
        getAllOrderPagination();
    }, [page]); // Use page as the dependency
    return (
        <div className="grid grid-cols-1 gap-3 p-4 w-full h-full overflow-hidden">
            <div className="bg-white col-span-1 rounded h-full w-full">
                <OrderChart />
            </div>
            <div className="bg-white col-span-1 rounded h-full w-full">
                <TableOrder orders={orders} />
            </div>
            <div className="col-span-1">
                <PaginationItems page={page} totalPage={totalPage} onPageChange={setPage} />
            </div>
        </div>
    )
}

export default AdminOrderPage