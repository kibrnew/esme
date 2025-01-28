"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type MembershipRequest = {
  id: string
  name: string
  email: string
  message: string
}

const initialRequests: MembershipRequest[] = [
  { id: "001", name: "John Doe", email: "john@example.com", message: "I would like to join as an individual member." },
  {
    id: "002",
    name: "Jane Smith",
    email: "jane@example.com",
    message: "Applying for institutional membership on behalf of XYZ Corp.",
  },
  { id: "003", name: "Bob Johnson", email: "bob@example.com", message: "Interested in joining as a student member." },
]

export default function MembershipValidationList() {
  const [requests, setRequests] = useState<MembershipRequest[]>(initialRequests)

  const handleAccept = (id: string) => {
    // TODO: Implement accept logic
    setRequests(requests.filter((request) => request.id !== id))
  }

  const handleReject = (id: string) => {
    // TODO: Implement reject logic
    setRequests(requests.filter((request) => request.id !== id))
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Membership Validation Requests</h2>
      <div className="space-y-4">
        {requests.map((request) => (
          <Card key={request.id}>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold">{request.name}</h3>
              <p className="text-sm text-gray-500">{request.email}</p>
              <p className="mt-2">{request.message}</p>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => handleReject(request.id)}>
                Reject
              </Button>
              <Button onClick={() => handleAccept(request.id)}>Accept</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

