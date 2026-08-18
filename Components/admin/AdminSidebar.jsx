"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: "▦",
    },
    {
      name: "Blogs",
      href: "/admin/blogs",
      icon: "✎",
    },
    {
      name: "Leads",
      href: "/admin/leads",
      icon: "☷",
    },
  ];
const handleLogout = async () => {
    try {
      const response = await fetch("/api/Auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        // Full page reload to clear all client-side state
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">AV</div>

        <div>
          <h2>AV Meditech</h2>
          <span>Admin Panel</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-label">MENU</p>

        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${isActive ? "active" : ""}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div>

       <button
          type="button"
          className="logout-btn"
          onClick={handleLogout}
        >
          <span>⇥</span>
          Logout
        </button>
      </div>
    </aside>
  );
}