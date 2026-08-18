"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LeadsPage() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");


    // =========================================
    // FETCH LEADS
    // =========================================

    useEffect(() => {
        fetchLeads();
    }, []);


    const fetchLeads = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch("/api/contact");

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to fetch leads"
                );
            }

            setLeads(result.data || []);

        } catch (error) {
            console.error("Fetch Leads Error:", error);

            setError(
                error.message || "Something went wrong"
            );

        } finally {
            setLoading(false);
        }
    };


    // =========================================
    // SEARCH
    // =========================================

    const filteredLeads = leads.filter((lead) => {

        const searchText =
            search.toLowerCase().trim();

        if (!searchText) {
            return true;
        }

        return (
            lead.name
                ?.toLowerCase()
                .includes(searchText) ||

            lead.email
                ?.toLowerCase()
                .includes(searchText) ||

            lead.phone
                ?.toLowerCase()
                .includes(searchText) ||

            lead.company
                ?.toLowerCase()
                .includes(searchText) ||

            lead.product
                ?.toLowerCase()
                .includes(searchText)
        );

    });


    // =========================================
    // FORMAT DATE
    // =========================================

    const formatDate = (date) => {

        if (!date) {
            return "-";
        }

        return new Date(date).toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );

    };


    // =========================================
    // LOADING
    // =========================================

    if (loading) {

        return (
            <div className="leads-page">

                <div className="leads-page-header">

                    <div>

                        <h2>Leads</h2>

                        <p>
                            Manage enquiries received
                            from your website.
                        </p>

                    </div>

                </div>

                <div className="leads-loading">
                    Loading leads...
                </div>

            </div>
        );

    }


    return (

        <div className="leads-page">


            {/* =================================
                PAGE HEADER
            ================================= */}

            <div className="leads-page-header">

                <div>

                    <h2>
                        Leads
                    </h2>

                    <p>
                        Manage enquiries received
                        from your website.
                    </p>

                </div>


                <div className="leads-count">

                    <span>
                        Total Leads
                    </span>

                    <strong>
                        {leads.length}
                    </strong>

                </div>

            </div>


            {/* =================================
                ERROR
            ================================= */}

            {error && (

                <div className="leads-error">

                    {error}

                </div>

            )}


            {/* =================================
                TOOLBAR
            ================================= */}

            <div className="leads-toolbar">

                <div className="leads-search">

                    <span>
                        ⌕
                    </span>

                    <input
                        type="text"
                        placeholder="Search by name, email, phone..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>


                <button
                    type="button"
                    className="refresh-leads-btn"
                    onClick={fetchLeads}
                >
                    ↻ Refresh
                </button>

            </div>


            {/* =================================
                TABLE
            ================================= */}

            <div className="leads-table-card">

                <div className="leads-table-header">

                    <div>

                        <h3>
                            All Leads
                        </h3>

                        <span>
                            Showing {filteredLeads.length} of{" "}
                            {leads.length} leads
                        </span>

                    </div>

                </div>


                {filteredLeads.length === 0 ? (

                    <div className="leads-empty">

                        <div className="leads-empty-icon">
                            ☷
                        </div>

                        <h3>
                            No leads found
                        </h3>

                        <p>
                            No enquiries match your
                            current search.
                        </p>

                    </div>

                ) : (

                    <div className="leads-table-wrapper">

                        <table className="leads-table">

                            <thead>

                                <tr>

                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Country</th>
                                    <th>Requirement</th>
                                    <th>Date</th>

                                </tr>

                            </thead>


                            <tbody>

                                {filteredLeads.map(
                                    (lead, index) => (

                                        <tr
                                            key={
                                                lead._id ||
                                                lead.id ||
                                                index
                                            }
                                        >

                                            {/* Name */}

                                            <td>

                                                <div className="lead-name">

                                                    <div className="lead-avatar">

                                                        {lead.name
                                                            ?.charAt(0)
                                                            ?.toUpperCase() ||
                                                            "?"}

                                                    </div>

                                                    <strong>
                                                        {lead.name ||
                                                            "-"}
                                                    </strong>

                                                </div>

                                            </td>


                                            {/* Company */}

                                            <td>
                                                {lead.company ||
                                                    "-"}
                                            </td>


                                            {/* Email */}

                                            <td>

                                                <a
                                                    href={`mailto:${lead.email}`}
                                                    className="lead-email"
                                                >
                                                    {lead.email ||
                                                        "-"}
                                                </a>

                                            </td>


                                            {/* Phone */}

                                            <td>

                                                {lead.phone ? (

                                                    <a
                                                        href={`tel:${lead.phone}`}
                                                        className="lead-phone"
                                                    >
                                                        {lead.phone}
                                                    </a>

                                                ) : (
                                                    "-"
                                                )}

                                            </td>


                                            {/* Country */}

                                            <td>
                                                {lead.country ||
                                                    "-"}
                                            </td>


                                            {/* Requirement */}

                                            <td>

                                                <span className="lead-requirement">

                                                    {lead.product ||
                                                        lead.requirement ||
                                                        "-"}

                                                </span>

                                            </td>


                                            {/* Date */}

                                            <td>

                                                {formatDate(
                                                    lead.createdAt ||
                                                    lead.date
                                                )}

                                            </td>

                                        </tr>

                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </div>

    );
}