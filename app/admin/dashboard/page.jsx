

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import StatCard from "@/components/admin/StatCard";
import AdminTable from "@/components/admin/AdminTable";

export default function AdminDashboard() {

    const [blogs, setBlogs] = useState([]);
    const [leads, setLeads] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // =========================================
    // FETCH DASHBOARD DATA
    // =========================================

    useEffect(() => {
        fetchDashboardData();
    }, []);


    const fetchDashboardData = async () => {

        try {

            setLoading(true);
            setError("");


            // Fetch Blogs + Leads together

            const [blogsResponse, leadsResponse] =
                await Promise.all([
                    fetch("/api/blog"),
                    fetch("/api/contact"),
                ]);


            const blogsResult =
                await blogsResponse.json();

            const leadsResult =
                await leadsResponse.json();


            // Check Blogs API

            if (
                !blogsResponse.ok ||
                !blogsResult.success
            ) {
                throw new Error(
                    blogsResult.message ||
                    "Failed to fetch blogs"
                );
            }


            // Check Leads API

            if (
                !leadsResponse.ok ||
                !leadsResult.success
            ) {
                throw new Error(
                    leadsResult.message ||
                    "Failed to fetch leads"
                );
            }


            setBlogs(blogsResult.data || []);
            setLeads(leadsResult.data || []);


        } catch (error) {

            console.error(
                "Dashboard Data Error:",
                error
            );

            setError(
                error.message ||
                "Failed to load dashboard"
            );

        } finally {

            setLoading(false);

        }

    };


    // =========================================
    // BLOG COUNTS
    // =========================================

    const totalBlogs = blogs.length;

    const publishedBlogs =
        blogs.filter(
            (blog) => blog.isPublished === true
        ).length;


    // =========================================
    // LEAD COUNTS
    // =========================================

    const totalLeads = leads.length;


    /*
     * Assuming your lead object has:
     *
     * status: "New"
     *
     * If your database uses another field,
     * we will change this later.
     */

    const newLeads =
        leads.filter(
            (lead) =>
                lead.status?.toLowerCase() === "new"
        ).length;


    // =========================================
    // RECENT LEADS
    // =========================================

    const recentLeads = [...leads]
        .sort(
            (a, b) =>
                new Date(
                    b.createdAt || b.date
                ) -
                new Date(
                    a.createdAt || a.date
                )
        )
        .slice(0, 5);


    // =========================================
    // TABLE COLUMNS
    // =========================================

    const leadColumns = [

        {
            key: "name",
            label: "Name",
        },

        {
            key: "email",
            label: "Email",
        },

        {
            key: "phone",
            label: "Phone",
        },

        {
            key: "createdAt",
            label: "Date",

            render: (row) => {

                const date =
                    row.createdAt ||
                    row.date;

                if (!date) {
                    return "-";
                }

                return new Date(
                    date
                ).toLocaleDateString(
                    "en-IN",
                    {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    }
                );

            },
        },

        {
            key: "status",
            label: "Status",

            render: (row) => {

                const status =
                    row.status || "New";

                return (
                    <span
                        className={`status-badge ${status.toLowerCase()}`}
                    >
                        {status}
                    </span>
                );

            },
        },

    ];


    // =========================================
    // LOADING
    // =========================================

    if (loading) {

        return (
            <div className="dashboard-heading">

                <div>

                    <h2>
                        Dashboard Overview
                    </h2>

                    <p>
                        Loading dashboard data...
                    </p>

                </div>

            </div>
        );

    }


    return (

        <div>

            {/* Page Heading */}

            <div className="dashboard-heading">

                <div>

                    <h2>
                        Dashboard Overview
                    </h2>

                    <p>
                        Here's what's happening with
                        your website today.
                    </p>

                </div>

            </div>


            {/* Error */}

            {error && (

                <div className="blog-error">

                    {error}

                </div>

            )}


            {/* Statistics */}

            <div className="stat-grid">


                <StatCard
                    title="Total Blogs"
                    value={totalBlogs}
                    description="All blog posts"
                    icon="✎"
                    variant="blue"
                />


                <StatCard
                    title="Published Blogs"
                    value={publishedBlogs}
                    description="Currently published"
                    icon="✓"
                    variant="green"
                />


                <StatCard
                    title="Total Leads"
                    value={totalLeads}
                    description="All form submissions"
                    icon="♧"
                    variant="orange"
                />


                <StatCard
                    title="New Leads"
                    value={newLeads}
                    description="Awaiting follow-up"
                    icon="!"
                    variant="red"
                />


            </div>


            {/* Recent Leads */}

            <div className="dashboard-section">


                <div className="section-header">

                    <div>

                        <h3>
                            Recent Leads
                        </h3>

                        <p>
                            Latest enquiries received
                            from the website.
                        </p>

                    </div>


                    <Link
                        href="/admin/leads"
                        className="view-all-btn"
                    >
                        View All
                    </Link>

                </div>


                <AdminTable
                    columns={leadColumns}
                    data={recentLeads}
                    emptyMessage="No leads found."
                />


            </div>

        </div>

    );

}