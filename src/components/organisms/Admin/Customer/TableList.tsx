import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHeader,
    TableRow,
    TableHead,
} from "@/components/atoms/ui/table";

// Define the User type
type User = {
    userId: number;
    userName: string;
    email: string;
    status: string;
    gender: string;
}

// Define the Props type
type Props = {
    users: User[];
}

const TableList = ({ users }: Props) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter users based on the search query
    const filteredUsers = users.filter((user) =>
        user.userName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full h-full">
            {/* Search Input */}
            <div className='h-[90%]'>
                <div>
                    <input
                        type="text"
                        placeholder="Search by user name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-2 border rounded w-full bg-white"
                    />
                </div>
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">User ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Gender</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => (
                                    <TableRow key={user.userId}>
                                        <TableCell className="font-medium">{user.userId}</TableCell>
                                        <TableCell>{user.userName}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            <div
                                                className={`rounded-full flex justify-center text-white hover:bg-opacity-75 ${user.status === "Active" ? 'bg-green-400 hover:bg-green-600' : 'bg-red-400 hover:bg-red-600'
                                                    }`}
                                            >
                                                {user.status}
                                            </div>
                                        </TableCell>

                                        <TableCell className="text-right">{user.gender}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">No users found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default TableList;
