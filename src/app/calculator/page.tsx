"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserRegistrationModal } from "@/components/user-registration-modal"

const loanCategories = [
  { value: "wedding", label: "Wedding Loans" },
  { value: "home", label: "Home Construction Loans" },
  { value: "business", label: "Business Startup Loans" },
  { value: "education", label: "Education Loans" },
]

export default function LoanCalculator() {
  const [category, setCategory] = useState("")
  const [initialDeposit, setInitialDeposit] = useState("")
  const [loanPeriod, setLoanPeriod] = useState("")
  const [loanAmount, setLoanAmount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const calculateLoan = () => {
    // This is a placeholder calculation
    const calculatedAmount = Number.parseInt(initialDeposit) * Number.parseInt(loanPeriod)
    setLoanAmount(calculatedAmount)
  }

  return (
    <div className="container py-6 md:py-12">
      <Card>
        <CardHeader>
          <CardTitle>Loan Calculator</CardTitle>
          <CardDescription>Calculate your estimated loan breakdown</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category">Loan Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select loan category" />
              </SelectTrigger>
              <SelectContent>
                {loanCategories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="initial-deposit">Initial Deposit (PKR)</Label>
            <Input
              id="initial-deposit"
              type="number"
              value={initialDeposit}
              onChange={(e) => setInitialDeposit(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loan-period">Loan Period (Years)</Label>
            <Input id="loan-period" type="number" value={loanPeriod} onChange={(e) => setLoanPeriod(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={calculateLoan}>Calculate</Button>
          <Button onClick={() => setIsModalOpen(true)}>Proceed</Button>
        </CardFooter>
      </Card>
      {loanAmount > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Loan Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Estimated loan amount: PKR {loanAmount}</p>
            {/* Add more breakdown details here */}
          </CardContent>
        </Card>
      )}
      <UserRegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

