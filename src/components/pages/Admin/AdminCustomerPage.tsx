import BuyersProfile from "@/components/organisms/Admin/Customer/BuyersProfile";
import TableList from "@/components/organisms/Admin/Customer/TableList";
import TypeLogin from "@/components/organisms/Admin/Customer/TypeLogin";
import WebVisitor from "@/components/organisms/Admin/Customer/WebVisitor";
import PaginationItems from "@/components/organisms/Global/PaginationItems";

const AdminCustomerPage = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 w-full h-full overflow-hidden">
            <div className="bg-white col-span-1 md:col-span-2 rounded h-full w-full">
                <TypeLogin />
            </div>
            <div className="bg-white col-span-1 rounded h-full w-full">
                <WebVisitor />
            </div>
            <div className="bg-white col-span-1 md:col-span-2 rounded h-full w-full">
                <TableList />
            </div>
            <div className="bg-white col-span-1 rounded h-full w-full">
                <BuyersProfile />
            </div>
            <div className="col-span-1 md:col-span-3">
                <PaginationItems />
            </div>
        </div>
    );
};

export default AdminCustomerPage;
