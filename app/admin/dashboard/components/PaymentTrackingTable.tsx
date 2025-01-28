"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Member = {
  id: string
  name: string
  payments: Record<number, "Paid" | "Not Paid">
}

const initialMembers: Member[] = [
  {
    id: "001",
    name: "John Doe",
    payments: {
      2010: "Paid",
      2011: "Paid",
      2012: "Paid",
      2013: "Paid",
      2014: "Paid",
      2015: "Paid",
      2016: "Paid",
      2017: "Paid",
      2018: "Paid",
      2019: "Paid",
      2020: "Paid",
      2021: "Paid",
      2022: "Paid",
      2023: "Paid",
      2024: "Not Paid",
      2025: "Not Paid",
    },
  },
  {
    id: "002",
    name: "Jane Smith",
    payments: {
      2010: "Not Paid",
      2011: "Not Paid",
      2012: "Paid",
      2013: "Paid",
      2014: "Paid",
      2015: "Paid",
      2016: "Paid",
      2017: "Paid",
      2018: "Paid",
      2019: "Paid",
      2020: "Paid",
      2021: "Paid",
      2022: "Paid",
      2023: "Not Paid",
      2024: "Not Paid",
      2025: "Not Paid",
    },
  },
  {
    id: "003",
    name: "Bob Johnson",
    payments: {
      2010: "Paid",
      2011: "Paid",
      2012: "Paid",
      2013: "Paid",
      2014: "Paid",
      2015: "Paid",
      2016: "Paid",
      2017: "Paid",
      2018: "Paid",
      2019: "Paid",
      2020: "Paid",
      2021: "Paid",
      2022: "Paid",
      2023: "Paid",
      2024: "Paid",
      2025: "Paid",
    },
  },
  {
    id: "004",
    name: "Alice Brown",
    payments: {
      2010: "Not Paid",
      2011: "Not Paid",
      2012: "Not Paid",
      2013: "Paid",
      2014: "Paid",
      2015: "Paid",
      2016: "Paid",
      2017: "Paid",
      2018: "Paid",
      2019: "Paid",
      2020: "Paid",
      2021: "Paid",
      2022: "Paid",
      2023: "Not Paid",
      2024: "Not Paid",
      2025: "Not Paid",
    },
  },
  {
    id: "005",
    name: "Charlie Davis",
    payments: {
      2010: "Paid",
      2011: "Paid",
      2012: "Paid",
      2013: "Paid",
      2014: "Paid",
      2015: "Paid",
      2016: "Paid",
      2017: "Paid",
      2018: "Paid",
      2019: "Paid",
      2020: "Paid",
      2021: "Paid",
      2022: "Paid",
      2023: "Paid",
      2024: "Paid",
      2025: "Paid",
    },
  },
]

export default function PaymentTrackingTable() {
  const [members, setMembers] = useState<Member[]>(initialMembers)

  const handlePaymentStatusChange = (memberId: string, year: number, newStatus: "Paid" | "Not Paid") => {
    setMembers(
      members.map((member) =>
        member.id === memberId ? { ...member, payments: { ...member.payments, [year]: newStatus } } : member,
      ),
    )
  }

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">User Payment Tracking</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="sticky left-0 bg-white">Member ID</TableHead>
            <TableHead className="sticky left-[100px] bg-white">Name</TableHead>
            {Array.from({ length: 16 }, (_, i) => 2010 + i).map((year) => (
              <TableHead key={year}>{year}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell className="sticky left-0 bg-white">{member.id}</TableCell>
              <TableCell className="sticky left-[100px] bg-white">{member.name}</TableCell>
              {Array.from({ length: 16 }, (_, i) => 2010 + i).map((year) => (
                <TableCell key={year}>
                  <Select
                    value={member.payments[year]}
                    onValueChange={(value: "Paid" | "Not Paid") => handlePaymentStatusChange(member.id, year, value)}
                  >
                    <SelectTrigger
                      className={`w-[100px] ${member.payments[year] === "Paid" ? "bg-green-100" : "bg-red-100"}`}
                    >
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Paid">Paid</SelectItem>
                      <SelectItem value="Not Paid">Not Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

