"use client";

import { usePathname } from "next/navigation";

export default function AdminTopbar() {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname.includes("/blogs")) return "Blogs";
    if (pathname.includes("/leads")) return "Leads";

    return "Dashboard";
  };

  return (
    <header className="admin-topbar">
      <div className="topbar-left">
        <button className="mobile-menu-btn">☰</button>

        <div>
          <h1>{getPageTitle()}</h1>
          <p>Welcome back, Admin</p>
        </div>
      </div>

      <div className="topbar-right">
        <button className="notification-btn" aria-label="Notifications">
          ♢
        </button>

        <div className="admin-profile">
          <div className="profile-avatar">A</div>

          <div className="profile-info">
            <strong>Administrator</strong>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}