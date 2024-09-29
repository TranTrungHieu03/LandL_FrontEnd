import BuyersProfile from "@/components/organisms/Admin/Customer/BuyersProfile";
import TableList from "@/components/organisms/Admin/Customer/TableList";
import TypeLogin from "@/components/organisms/Admin/Customer/TypeLogin";
import WebVisitor from "@/components/organisms/Admin/Customer/WebVisitor";
import PaginationSelector from "@/components/organisms/Global/PaginationSelector";
import { getAllUser } from "@/services/adminService";
import { useEffect, useState } from "react";

type User = {
    userId: number;
    userName: string;
    email: string;
    status: string;
    gender: string;
}

const AdminCustomerPage = () => {
    const [page, setPage] = useState<number>(1); // Start from page 1
    const [totalPage, setTotalPage] = useState<number>(0);
    const [users, setUsers] = useState<User[]>([]); // Use specific type for users
    const [loading, setLoading] = useState<boolean>(false);

    const getAllUserPagination = async () => {
        setLoading(true);
        try {
            const response = await getAllUser(page); // Pass the page number
            if (response.success) {
                setPage(response.result?.pagination.page);
                setTotalPage(response.result?.pagination.totalPage);
                setUsers(response.result?.data); // Store the user data
            } else {
                console.error(response.result?.message);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    // Call the API whenever the page number changes
    useEffect(() => {
        getAllUserPagination();
    }, [page]); // Use page as the dependency

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 w-full h-full overflow-hidden">
            <div className="bg-white col-span-1 md:col-span-2 rounded h-full w-full">
                <TypeLogin />
            </div>
            <div className="bg-white col-span-1 rounded h-full w-full">
                <WebVisitor />
            </div>
            <div className="bg-white col-span-1 md:col-span-2 rounded h-full w-full">
                <TableList users={users} /> {/* Pass users to TableList */}
            </div>
            <div className="bg-white col-span-1 rounded h-full w-full">
                <BuyersProfile />
            </div>
            <div className="col-span-1 md:col-span-3">
                <PaginationSelector page={page} totalPage={totalPage} onPageChange={setPage} />
            </div>
        </div>
    );
};

export default AdminCustomerPage;
