import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
    TableHead,
} from "@/components/atoms/ui/table";

type Order = {
    orderDetailId: number;
    orderDetailCode: string | null;
    reference: string | null;
    paymentMethod: string;
    transactionDateTime: string;
    totalPrice: number;
    status: string;
    distance: string;
    startDate: string;
}

// Define the Props type
type Props = {
    orders: Order[];
}

const TableOrder = ({ orders }: Props) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter orders based on the search query (searching by orderDetailId or status)
    const filteredOrders = orders.filter((order) => {
        const searchLower = searchQuery.toLowerCase();

        // Convert orderDetailId to string to allow comparison with searchQuery
        const matchesId = order.orderDetailId.toString().includes(searchQuery);
        const matchesStatus = order.status.toLowerCase().includes(searchLower);

        return matchesId || matchesStatus;
    });

    return (
        <div className="w-full h-full">
            {/* Search Input */}
            <div className='h-[95%]'>
                <div>
                    <input
                        type="text"
                        placeholder="Search by order ID or status..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-2 border rounded w-full bg-white"
                    />
                </div>
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Order Code</TableHead>
                                <TableHead>Reference</TableHead>
                                <TableHead>Payment Method</TableHead>
                                <TableHead>Transaction Date</TableHead>
                                <TableHead>Total Price</TableHead>
                                <TableHead>Distance</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredOrders.length > 0 ? (
                                filteredOrders.map((order) => (
                                    <TableRow key={order.orderDetailId}>
                                        <TableCell className="font-medium">{order.orderDetailId}</TableCell>
                                        <TableCell>{order.orderDetailCode || "N/A"}</TableCell>
                                        <TableCell>{order.reference || "N/A"}</TableCell>
                                        <TableCell>{order.paymentMethod}</TableCell>
                                        <TableCell>{new Date(order.transactionDateTime).toLocaleDateString()}</TableCell>
                                        <TableCell>{order.totalPrice}</TableCell>
                                        <TableCell>{order.distance}</TableCell>
                                        <TableCell>
                                            <div
                                                className={`rounded-full flex justify-center text-white hover:bg-opacity-75 ${order.status === "Completed" ? 'bg-green-400 hover:bg-green-600' : 'bg-red-400 hover:bg-red-600'
                                                    }`}
                                            >
                                                {order.status}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={8} className="text-center">No orders found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default TableOrder;
