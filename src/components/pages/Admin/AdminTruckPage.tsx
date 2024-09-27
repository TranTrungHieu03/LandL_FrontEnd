import Miles from "@/components/organisms/Admin/Truck/Miles"

const AdminTruckPage = () => {
    return (
        <div className="grid md:grid-rows-5 sm:grid-cols-1 w-full h-full overflow-hidden">
            <div className="grid grid-cols-2 row-span-2 gap-x-5 m-4 w-full">
                <div className="bg-white col-span-2 rounded h-[300px] w-full"> {/* Adjust height as needed */}
                    <Miles />
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default AdminTruckPage