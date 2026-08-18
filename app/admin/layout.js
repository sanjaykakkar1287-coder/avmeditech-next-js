import "./admin.css";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">

      <AdminSidebar />

      <div className="admin-main">
        <AdminTopbar />

        <main className="admin-content">
          {children}
        </main>
      </div>

    </div>
  );
}