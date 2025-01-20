'use client'

import { useState, useEffect } from 'react'
import { IndividualMember, InstitutionalMember } from '@/types/member'

export default function AdminDashboard() {
  const [individualMembers, setIndividualMembers] = useState<IndividualMember[]>([])
  const [institutionalMembers, setInstitutionalMembers] = useState<InstitutionalMember[]>([])

  useEffect(() => {
    // TODO: Fetch member data from API
    // For now, we'll use mock data
    const mockIndividualMembers: IndividualMember[] = [
      {
        personal_information: {
          full_name: "John Doe",
          title: "Mr.",
          nationality: "USA"
        },
        membership_details: {
          membership_type: "Full Member",
          membership_status: "Active",
          application_progress: 100
        }
      },
      // Add more mock individual members
    ]

    const mockInstitutionalMembers: InstitutionalMember[] = [
      {
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
        }
      },
      // Add more mock institutional members
    ]

    setIndividualMembers(mockIndividualMembers)
    setInstitutionalMembers(mockInstitutionalMembers)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Individual Members</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Membership Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {individualMembers.map((member, index) => (
              <tr key={index}>
                <td>{member.personal_information.full_name}</td>
                <td>{member.membership_details.membership_type}</td>
                <td>{member.membership_details.membership_status}</td>
                <td>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">View</button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded">Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Institutional Members</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Membership Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {institutionalMembers.map((member, index) => (
              <tr key={index}>
                <td>{member.institution_information.name}</td>
                <td>{member.membership_details.membership_type}</td>
                <td>{member.membership_details.membership_status}</td>
                <td>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">View</button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded">Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add more sections for payment statuses, application progress, etc. */}
    </div>
  )
}

