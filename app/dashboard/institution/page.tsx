'use client'

import { useState, useEffect } from 'react'
import { InstitutionalMember } from '@/types/member'

export default function InstitutionalDashboard() {
  const [memberData, setMemberData] = useState<InstitutionalMember | null>(null)

  useEffect(() => {
    // TODO: Fetch member data from API
    // For now, we'll use mock data
    const mockData: InstitutionalMember = {
      institution_information: {
        name: "Acme Corporation",
        address: {
          city: "New York",
          country: "USA"
        },
        contact_details: {
          email: "info@acme.com",
          telephone: "+1234567890"
        }
      },
      membership_details: {
        membership_type: "Gold",
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
      <h1 className="text-3xl font-bold">Institutional Member Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Institution Information</h2>
        <p><strong>Name:</strong> {memberData.institution_information.name}</p>
        <p><strong>City:</strong> {memberData.institution_information.address.city}</p>
        <p><strong>Country:</strong> {memberData.institution_information.address.country}</p>
        <p><strong>Email:</strong> {memberData.institution_information.contact_details.email}</p>
        <p><strong>Telephone:</strong> {memberData.institution_information.contact_details.telephone}</p>
        <p><strong>Membership Type:</strong> {memberData.membership_details.membership_type}</p>
        <p><strong>Status:</strong> {memberData.membership_details.membership_status}</p>
      </div>
      {/* Add sections for payment status and annual membership fees */}
    </div>
  )
}

