'use client'

import { useState, useEffect } from 'react'
import { IndividualMember } from '@/types/member'

export default function IndividualDashboard() {
  const [memberData, setMemberData] = useState<IndividualMember | null>(null)

  useEffect(() => {
    // TODO: Fetch member data from API
    // For now, we'll use mock data
    const mockData: IndividualMember = {
      personal_information: {
        full_name: "John Doe",
        title: "Mr.",
        nationality: "USA"
      },
      membership_details: {
        membership_type: "Full Member",
        membership_status: "Active",
        application_progress: 100
      },
      // Add other fields as needed
    }
    setMemberData(mockData)
  }, [])

  if (!memberData) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Individual Member Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Membership Information</h2>
        <p><strong>Name:</strong> {memberData.personal_information.full_name}</p>
        <p><strong>Title:</strong> {memberData.personal_information.title}</p>
        <p><strong>Nationality:</strong> {memberData.personal_information.nationality}</p>
        <p><strong>Membership Type:</strong> {memberData.membership_details.membership_type}</p>
        <p><strong>Status:</strong> {memberData.membership_details.membership_status}</p>
      </div>
      {/* Add sections for payment receipts and payment history */}
    </div>
  )
}

