"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Bill = {
  id: string
  uploader: string
  amount: number
  date: string
  description: string
}

const initialBills: Bill[] = [
  { id: "001", uploader: "John Doe", amount: 100, date: "2023-05-15", description: "Annual membership fee" },
  { id: "002", uploader: "Jane Smith", amount: 250, date: "2023-06-01", description: "Conference registration" },
  { id: "003", uploader: "Bob Johnson", amount: 50, date: "2023-06-10", description: "Workshop materials" },
]

export default function BillValidationTable() {
  const [bills, setBills] = useState<Bill[]>(initialBills)
  const [selectedBill, setSelectedBill] = useState<Bill | null>(null)

  const handleAccept = (id: string) => {
    // TODO: Implement accept logic
    setBills(bills.filter((bill) => bill.id !== id))
  }

  const handleReject = (id: string) => {
    // TODO: Implement reject logic
    setBills(bills.filter((bill) => bill.id !== id))
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Bill Validation</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Uploader</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bills.map((bill) => (
            <TableRow key={bill.id}>
              <TableCell>{bill.uploader}</TableCell>
              <TableCell>${bill.amount.toFixed(2)}</TableCell>
              <TableCell>{bill.date}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedBill(bill)}>
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Bill Details</DialogTitle>
                        <DialogDescription>
                          {selectedBill && (
                            <div>
                              <p>
                                <strong>Uploader:</strong> {selectedBill.uploader}
                              </p>
                              <p>
                                <strong>Amount:</strong> ${selectedBill.amount.toFixed(2)}
                              </p>
                              <p>
                                <strong>Date:</strong> {selectedBill.date}
                              </p>
                              <p>
                                <strong>Description:</strong> {selectedBill.description}
                              </p>
                            </div>
                          )}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" size="sm" onClick={() => handleReject(bill.id)}>
                    Reject
                  </Button>
                  <Button size="sm" onClick={() => handleAccept(bill.id)}>
                    Accept
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

