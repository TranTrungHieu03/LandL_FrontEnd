import Sidebar from '@/components/organisms/Global/Sidebar.tsx';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 w-full h-full bg-orange-100 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
