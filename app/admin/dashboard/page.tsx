"use client";

import { useState } from "react";
import PaymentTrackingTable from "./components/PaymentTrackingTable";
import MembershipValidationList from "./components/MembershipValidationList";
import BillValidationTable from "./components/BillValidationTable";
import { Card } from "@/components/ui/card";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("payments");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">Total Members</h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">Pending Validations</h3>
          <p className="text-3xl font-bold text-yellow-600">23</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">Unpaid Members</h3>
          <p className="text-3xl font-bold text-red-600">45</p>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="flex mb-4 border-b">
        <button
          className={`py-2 px-4 ${
            activeTab === "payments"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("payments")}
        >
          Payment Tracking
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "memberships"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("memberships")}
        >
          Membership Validation
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "bills"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("bills")}
        >
          Bill Validation
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "payments" && <PaymentTrackingTable />}
      {activeTab === "memberships" && <MembershipValidationList />}
      {activeTab === "bills" && <BillValidationTable />}
    </div>
  );
}
