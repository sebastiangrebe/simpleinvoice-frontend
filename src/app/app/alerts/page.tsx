"use client"
import React, { useState } from "react";

// Dummy alert data
const alerts = [
  {
    id: "ALRT-001",
    category: "Confidential",
    severity: "High",
    status: "Open",
    platform: "Google Workspace",
    date: "2024-12-12",
    description: "Sensitive client data shared externally without authorization.",
  },
  {
    id: "ALRT-002",
    category: "Security",
    severity: "Critical",
    status: "Open",
    platform: "Slack",
    date: "2024-12-10",
    description: "Unauthorized login attempt detected from a suspicious IP address.",
  },
  {
    id: "ALRT-003",
    category: "Operational",
    severity: "Moderate",
    status: "Resolved",
    platform: "Microsoft 365",
    date: "2024-12-08",
    description: "Disruption in workflow detected due to unscheduled access changes.",
  },
];

const AlertsPage = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [selectedAlert, setSelectedAlert] = useState<any>(null);

  // Filter alerts based on the selected filter and search input
  const filteredAlerts = alerts.filter((alert) => {
    const matchesStatus =
      filter === "all" || alert.status.toLowerCase() === filter;
    const matchesSearch =
      search === "" ||
      alert.id.toLowerCase().includes(search.toLowerCase()) ||
      alert.category.toLowerCase().includes(search.toLowerCase());
    const matchesDate = dateFilter === "" || alert.date === dateFilter;
    return matchesStatus && matchesSearch && matchesDate;
  });

  return (
    <div className="alerts-page p-6">
      {/* Filters Section */}
      <div className="filters flex flex-wrap items-center justify-between mb-4">
        <div className="filter-buttons flex space-x-2">
          <button
            className={`filter-btn px-4 py-2 rounded ${
              filter === "open" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("open")}
          >
            Open
          </button>
          <button
            className={`filter-btn px-4 py-2 rounded ${
              filter === "resolved" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("resolved")}
          >
            Resolved
          </button>
          <button
            className={`filter-btn px-4 py-2 rounded ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
        </div>
        <div className="flex items-center space-x-4">
          {/* Keyword Search */}
          <input
            type="text"
            placeholder="Search by keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input border border-gray-300 rounded px-4 py-2"
          />
          {/* Date Filter */}
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="date-filter border border-gray-300 rounded px-4 py-2"
          />
        </div>
      </div>

      {/* Alerts Table */}
      <div className="alerts-table bg-white shadow rounded">
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Severity</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Platform</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredAlerts.map((alert) => (
              <tr key={alert.id}>
                <td className="px-4 py-2">{alert.id}</td>
                <td className="px-4 py-2">{alert.category}</td>
                <td className="px-4 py-2">{alert.severity}</td>
                <td
                  className={`px-4 py-2 ${
                    alert.status === "Open" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {alert.status}
                </td>
                <td className="px-4 py-2">{alert.platform}</td>
                <td className="px-4 py-2">{alert.date}</td>
                <td className="px-4 py-2">
                  <button
                    className="text-blue-500"
                    onClick={() => setSelectedAlert(alert)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Alert Dialog */}
      {selectedAlert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setSelectedAlert(null)}
        >
          <div
            className="bg-white rounded shadow-lg p-6 max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Alert Details</h2>
            <div className="space-y-2">
              <p>
                <strong>ID:</strong> {selectedAlert.id}
              </p>
              <p>
                <strong>Category:</strong> {selectedAlert.category}
              </p>
              <p>
                <strong>Severity:</strong> {selectedAlert.severity}
              </p>
              <p>
                <strong>Status:</strong> {selectedAlert.status}
              </p>
              <p>
                <strong>Platform:</strong> {selectedAlert.platform}
              </p>
              <p>
                <strong>Date:</strong> {selectedAlert.date}
              </p>
              <p>
                <strong>Description:</strong> {selectedAlert.description}
              </p>
            </div>
            <div className="mt-4 text-right">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setSelectedAlert(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertsPage;
